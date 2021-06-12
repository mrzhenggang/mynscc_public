(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{455:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("GNU 编译器套件（GNU Compiler Collection）包括 C、 C++、 Objective-C、 Fortran、 Java、Ada 和 Go 语言的前端，也包括了这些语言的库（如 libstdc++、 libgcj 等等）。")]),s._v(" "),t("p",[s._v("官网地址："),t("a",{attrs:{href:"http://gcc.gnu.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"编译-4-9-4版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译-4-9-4版本"}},[s._v("#")]),s._v(" 编译 4.9.4版本")]),s._v(" "),t("h3",{attrs:{id:"下载相关依赖包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载相关依赖包"}},[s._v("#")]),s._v(" 下载相关依赖包")]),s._v(" "),t("p",[s._v("GCC 4.9.4 released [2016-08-03]")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GCC")]),s._v("\nftp://gcc.gnu.org/pub/gcc/releases/gcc-4.9.4/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Necessary to build GCC. ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当您使用的系统不能直接链接互联网的时候，可以手动下载依赖包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 否者就不需要手动下载了")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MPFR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mpfr-2.4.2\nftp://gcc.gnu.org/pub/gcc/infrastructure/mpfr-2.4.2.tar.bz2\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GMP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gmp-4.3.2\nftp://gcc.gnu.org/pub/gcc/infrastructure/gmp-4.3.2.tar.bz2\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MPC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mpc-0.8.1\nftp://gcc.gnu.org/pub/gcc/infrastructure/mpc-0.8.1.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Necessary to build GCC with the Graphite loop optimizations.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ISL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("isl-0.12.2\nftp://gcc.gnu.org/pub/gcc/infrastructure/isl-0.12.2.tar.bz2\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLOOG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cloog-0.18.1\nftp://gcc.gnu.org/pub/gcc/infrastructure/cloog-0.18.1.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("blockquote",[t("p",[s._v("备注：怎么知道下载哪些依赖包呢？\nvim ./contrib/download_prerequisites\n查看所需的依赖库的下载了路径，例如：\nMPFR=mpfr-2.4.2\nwget ftp://gcc.gnu.org/pub/gcc/infrastructure/$MPFR.tar.bz2 || exit 1\n因此，mpfr 的下载路径为：\nftp://gcc.gnu.org/pub/gcc/infrastructure/mpfr-2.4.2.tar.bz2")])]),s._v(" "),t("h3",{attrs:{id:"配置依赖文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置依赖文件"}},[s._v("#")]),s._v(" 配置依赖文件")]),s._v(" "),t("p",[s._v("1）将下载的压缩包上传，现将 gcc-4.9.4.tar.bz2 压缩包解压缩")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" jxvf gcc-4.9.4.tar.bz2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2）然后将其他依赖包移动至解压后的 gcc-4.9.4 文件夹")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mpfr-2.4.2.tar.bz2 gmp-4.3.2.tar.bz mpc-0.8.1.tar.gz "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  mpc-0.8.1.tar.gz cloog-0.18.1.tar.gz gcc-4.9.4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("3）修改 download_prerequisites 文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ./gcc-4.9.4/contrib/download_prerequisites\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在带有 wget 的每一行最前面添加“#”字符，将其注释掉")]),s._v(" "),t("p",[s._v("4）配置依赖文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" gcc-4.9.4\n./contrib/download_prerequisites\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"编译-gcc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译-gcc"}},[s._v("#")]),s._v(" 编译 gcc")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" gcc-build-4.9.4\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" gcc-build-4.9.4\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/gcc-4.9.4/configure "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/gcc/4.9.4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --enable-bootstrap "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --enable-shared "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --enable-checking"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("release "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --enable-threads"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("posix "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --enable-languages"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("all "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --with-system-zlib "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --enable-__cxa_atexit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --build"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x86_64-kylin-linux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" configure.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j12\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/gcc/4.9.4/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/gcc/4.9.4/lib64:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);