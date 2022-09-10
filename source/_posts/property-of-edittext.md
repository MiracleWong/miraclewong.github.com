title: Android UI控件 之 EditText的属性
date: 2016-01-09 20:10:00
tags: 
- Android
- 总结
categories: 
- Android
---

这里说是EditText的属性的总结。其实很多的内容，在其他的空间如TextView和Button上，都是通用的。这里一并写上。

1. android:hint="请输入数字！"//设置显示在空间上的提示信息
2. android:numeric="integer"//设置只能输入整数，如果是小数则是：decimal
3. android:singleLine="true"//设置单行输入，一旦设置为true，则文字不会自动换行。
4. android:password="true"//设置只能输入密码
5. android:textColor = "#ff8c00"//字体颜色
6. android:textStyle="bold"//字体，bold, italic, bolditalic
7. android:textSize="20dip"//大小
8. android:capitalize = "characters"//以大写字母写
9. android:textAlign="center"//EditText没有这个属性，但TextView有，居中
10. android:textColorHighlight="#cccccc"//被选中文字的底色，默认为蓝色
11. android:textColorHint="#ffff00"//设置提示信息文字的颜色，默认为灰色android:textScaleX="1.5"//控制字与字之间的间距
12. android:typeface="monospace"//字型，normal, sans, serif, monospace
13. android:background="@null"//背景，这里没有，指透明
14. android:layout_weight="1"//权重，控制控件之间的地位,在控制控件显示的大小时蛮有用的。
15. android:textAppearance="?android:attr/textAppearanceLargeInverse"//文字外观
16. android:layout_gravity="center_vertical"//设置控件显示的位置：默认top，这里居中显示，还有bottom
17. android:gray="top" //多行中指针在第一行第一位置
18. et.setSelection(et.length());//调整光标到最后一行
19. android:autoText //自动拼写帮助
20. android:capitalize //首字母大写
21. android:digits //设置只接受某些数字
22. android：singleLine//是否单行或者多行，回车是离开文本框还是文本框增加新行
23. android：numeric //只接受数字
24. android：phoneNumber //输入电话号码
25. android：editable //是否可编辑
26. android:autoLink=”all” //设置文本超链接样式当点击网址时，跳向该网址 
27. android:textAppearance="?android:attr/textAppearanceLargeInverse"//文字外观，这里引用的是系统自带的一个外观，
28. android:autoLink设置是否当文本为URL链接/email/电话号码/map时，文本显示为可点击的链接。可选值(none/web/email/phone/map/all)
29. android:autoText如果设置，将自动执行输入值的拼写纠正。此处无效果，在显示输入法并输入的时候起作用。
30. android:bufferType指定getText()方式取得的文本类别。选项editable 类似于StringBuilder可追加字符，也就是说getText后可调用append方法设置文本内容。spannable 则可在给定的字符区域使用样式，参见这里1、这里2。
31. android:capitalize设置英文字母大写类型。此处无效果，需要弹出输入法才能看得到，参见EditView此属性说明。
32. android:cursorVisible设定光标为显示/隐藏，默认显示。
33. android:digits设置允许输入哪些字符。如“1234567890.+-*/% ()”
34. android:drawableBottom在text的下方输出一个drawable，如图片。如果指定一个颜色的话会把text的背景设为该颜色，并且同时和background使用时覆盖后者。
35. android:drawableLeft在text的左边输出一个drawable，如图片。
36. android:drawablePadding设置text与drawable(图片)的间隔，与drawableLeft、drawableRight、drawableTop、drawableBottom一起使用，可设置为负数，单独使用没有效果。 
37. android:drawableRight在text的右边输出一个drawable，如图片。
38. android:drawableTop在text的正上方输出一个drawable，如图片。
39. android:editable设置是否可编辑。这里无效果，参见EditView。
40. android:editorExtras设置文本的额外的输入数据。在EditView再讨论。
41. android:ellipsize设置当文字过长时,该控件该如何显示。有如下值设置：”start”—?省略号显示在开头;”end”——省略号显示在结尾;”middle”—-省略号显示在中间;”marquee” ——以跑马灯的方式显示(动画横向移动)
42. android:freezesText设置保存文本的内容以及光标的位置。参见：这里。
43. android:gravity设置文本位置，如设置成“center”，文本将居中显示。
44. android:hintText为空时显示的文字提示信息，可通过textColorHint设置提示信息的颜色。此属性在EditView中使用，但是这里也可以用。
45. android:imeOptions附加功能，设置右下角IME动作与编辑框相关的动作，如actionDone右下角将显示一个“完成”，而不设置默认是一个回车符号。这个在EditView中再详细说明，此处无用。
46. android:imeActionId设置IME动作ID。在EditView再做说明，可以先看这篇帖子：这里。
47. android:imeActionLabel设置IME动作标签。在EditView再做说明。
48. android:includeFontPadding设置文本是否包含顶部和底部额外空白，默认为true。
49. android:inputMethod为文本指定输入法，需要完全限定名(完整的包名)。例如：com.google.android.inputmethod.pinyin，但是这里报错找不到。
50. android:inputType设置文本的类型，用于帮助输入法显示合适的键盘类型。在EditView中再详细说明，这里无效果。
51. android:linksClickable设置链接是否点击连接，即使设置了autoLink。
52. android:marqueeRepeatLimit在ellipsize指定marquee的情况下，设置重复滚动的次数，当设置为marquee_forever时表示无限次。
53. android:ems设置TextView的宽度为N个字符的宽度。这里测试为一个汉字字符宽度，如图：
54. android:maxEms设置TextView的宽度为最长为N个字符的宽度。与ems同时使用时覆盖ems选项。
55. android:minEms设置TextView的宽度为最短为N个字符的宽度。与ems同时使用时覆盖ems选项。
56. android:maxLength限制显示的文本长度，超出部分不显示。
57. android:lines设置文本的行数，设置两行就显示两行，即使第二行没有数据。
58. android:maxLines设置文本的最大显示行数，与width或者layout_width结合使用，超出部分自动换行，超出行数将不显示。
59. android:minLines设置文本的最小行数，与lines类似。
60. android:lineSpacingExtra设置行间距。
61. android:lineSpacingMultiplier设置行间距的倍数。如”1.2”
62. android:numeric如果被设置，该TextView有一个数字输入法。此处无用，设置后唯一效果是TextView有点击效果，此属性在EdtiView将详细说明。
63. android:password以小点”.”显示文本
64. android:phoneNumber设置为电话号码的输入方式。
65. android:privateImeOptions设置输入法选项，此处无用，在EditText将进一步讨论。
66. android:scrollHorizontally设置文本超出TextView的宽度的情况下，是否出现横拉条。
67. android:selectAllOnFocus如果文本是可选择的，让他获取焦点而不是将光标移动为文本的开始位置或者末尾位置。TextView中设置后无效果。
68. android:shadowColor指定文本阴影的颜色，需要与shadowRadius一起使用。效果：
69. android:shadowDx设置阴影横向坐标开始位置。
70. android:shadowDy设置阴影纵向坐标开始位置。
71. android:shadowRadius设置阴影的半径。设置为0.1就变成字体的颜色了，一般设置为3.0的效果比较好。
72. android:singleLine设置单行显示。如果和layout_width一起使用，当文本不能全部显示时，后面用“…”来表示。如android:text="test_ singleLine " android:singleLine="true" android:layout_width="20dp"将只显示“t…”。如果不设置singleLine或者设置为false，文本将自动换行
73. android:shadowDx设置阴影横向坐标开始位置。
74. android:shadowDy设置阴影纵向坐标开始位置。
75. android:shadowRadius设置阴影的半径。设置为0.1就变成字体的颜色了，一般设置为3.0的效果比较好。
76. android:singleLine设置单行显示。如果和layout_width一起使用，当文本不能全部显示时，后面用“…”来表示。如android:text="test_ singleLine " android:singleLine="true" android:layout_width="20dp"将只显示“t…”。如果不设置singleLine或者设置为false，文本将自动换行
77. android:text设置显示文本.
78. android:textSize设置文字大小，推荐度量单位”sp”，如”15sp”
79. android:textStyle设置字形[bold(粗体) 0, italic(斜体) 1, bolditalic(又粗又斜) 2] 可以设置一个或多个，用“|”隔开
80. android:typeface设置文本字体，必须是以下常量值之一：normal 0, sans 1, serif 2, monospace(等宽字体) 3]
81. android:height设置文本区域的高度，支持度量单位：px(像素)/dp/sp/in/mm(毫米)
82. android:maxHeight设置文本区域的最大高度
83. android:minHeight设置文本区域的最小高度
84. android:width设置文本区域的宽度，支持度量单位：px(像素)/dp/sp/in/mm(毫米)，与layout_width的区别看这里。
85. android:maxWidth设置文本区域的最大宽度
86. android:minWidth设置文本区域的最小宽度

