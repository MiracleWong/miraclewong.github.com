(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{524:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"leetcode-刷题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-刷题"}},[t._v("#")]),t._v(" LeetCode 刷题")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxArea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// height 是一个装有高度值的数组")]),t._v("\n    max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start\n        high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            end"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" high\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" max "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tmax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" max\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[t._v("// 题目的理解：题目的本质，实际上寻找两根垂直线所组成的矩形的面积的最大值。其中，垂直线 i 的有两个端点组成，两个端点分别为 (i, ai) 和 (i, 0)。这是数学意义上的抽象的线，没有实际的宽度和高度。第一次理解的时候，我以为还要将整体矩形的面积减去每条线所组成的黑色的矩形的面积（如图所示）。")]),t._v(" "),a("p",[t._v("// 方案1：暴力解法，双重循环，找到所有可能的垂直线的组合方式，将其组成的矩形值记录，并求出最大值。")]),t._v(" "),a("p",[t._v("// 时间复杂度：O(n2)\n// 空间复杂度：O(1)")]),t._v(" "),a("p",[t._v("//  方案2：暴力解法，双指针，一个指针指向最前，一个指向最后，比较两个垂直线的高低，低的一方向高的一方移动（为什么不是高的向低的移动：因为面积=高度（两相比较的低的一方）* 宽度（两条线的距离），高的向低的一方移动，面积不会有增大的改变；而低的向高的移到，虽然宽度减少，但有可能高度增加使得总体面积增加）")]),t._v(" "),a("p",[t._v("// 时间复杂度：O(n)\n// 空间复杂度：O(1)")])])}),[],!1,null,null,null);s.default=e.exports}}]);