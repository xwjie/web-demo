interface TreeNode {
    left? : TreeNode;
    right? : TreeNode;
    val : number;
}

const root : TreeNode = {
    val : 1 ,
    left : {
        val : 2 ,
        left : {
            val : 4 ,
            right : {
                val : 5
            }
        }
    } ,
    right : {
        val : 3
    }
};

const treeWalker : (root : TreeNode) => number[] = (root : TreeNode) => {
    let result : number[] = [];

    // 可选参数必修放前面
    function _treeWalk(result : number[] , node? : TreeNode) {
        if (!node) {
            return
        }

        result.push(node.val);

        // 递归
        _treeWalk(result , node.left);
        _treeWalk(result , node.right);
    }

    _treeWalk(result , root);

    return result;
}

console.log(treeWalker(root))