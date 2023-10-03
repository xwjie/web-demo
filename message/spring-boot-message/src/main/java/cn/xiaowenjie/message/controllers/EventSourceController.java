package cn.xiaowenjie.message.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@Slf4j
@CrossOrigin
@RequestMapping("/event-source")
public class EventSourceController {

    private final static AtomicLong id = new AtomicLong();

    @ResponseBody
    @RequestMapping(value = "/getDate", produces = "text/event-stream;charset=UTF-8")
    public void getDate(HttpServletResponse response) throws Exception {
        log.info("getDate event start");

        response.setContentType("text/event-stream");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(200);

        while (!response.getWriter().checkError()) {
            // 指定消息类型
            // response.getWriter().write("event:" + "notice" + "\n");

            response.getWriter().write("id:" + id.incrementAndGet() + "\n");

            response.getWriter().write("data:" + new Date() + "\n\n");

            response.getWriter().flush();

            Thread.sleep(1000);
        }

        response.getWriter().close();
        log.info("getDate event end");
    }

    @ResponseBody
    @RequestMapping(value = "/getDate2", produces = "text/event-stream;charset=UTF-8")
    public SseEmitter getDate2(HttpServletResponse response) throws Exception {
        log.info("getDate event start");

        // 超时时间设置为3s，用于演示客户端自动重连
        SseEmitter sseEmitter = new SseEmitter(30000L);

        // 设置前端的重试时间为1s
        sseEmitter.send(SseEmitter.event().reconnectTime(1000).data("连接成功"));


        sseEmitter.onTimeout(() -> {
            log.info("超时");
        });

        sseEmitter.onCompletion(() -> log.info("完成！！！"));

        log.info("getDate event end");

        // 结束
        sseEmitter.complete();

        return sseEmitter;
    }
}
