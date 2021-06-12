(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{472:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("VASP 全称 Vienna Ab-initio Simulation Package。它是维也纳大学 Hafner 小组开发的进行电子结构计算和量子力学-分子动力学模拟软件包。它是目前材料模拟和计算物质科学研究中最流行的商用软件之一。")]),s._v(" "),t("p",[s._v("官网地址："),t("a",{attrs:{href:"http://www.vasp.at/",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("截止目前（2017.4.22）的最新版本："),t("a",{attrs:{href:"http://www.vasp.at/index.PHP/news/44-administrative/118-new-release-vasp-5-4-4",target:"_blank",rel:"noopener noreferrer"}},[s._v("VASP5.4.4简介"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("下载：商业软件，需要购买版权。")]),s._v(" "),t("h2",{attrs:{id:"编译环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译环境"}},[s._v("#")]),s._v(" 编译环境")]),s._v(" "),t("p",[s._v("VASP是FOTRAN语言编写的程序，需要先编译，然后才能运行可执行程序。")]),s._v(" "),t("p",[s._v("因此，需要安装编译器：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://gcc.gnu.org/",title:"gcc编译器官网",target:"_blank",rel:"noopener noreferrer"}},[s._v("GNU Compiler "),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://software.intel.com/en-us/intel-compilers",title:"intel编译器官网",target:"_blank",rel:"noopener noreferrer"}},[s._v("INTEL Compiler"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("以及MPI编译器（如果需要并行计算）：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.mpich.org/",title:"MPICH | High-Performance Portable MPI",target:"_blank",rel:"noopener noreferrer"}},[s._v("MPICH"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.open-mpi.org/",title:"Open MPI | Open Source High Performance Computing",target:"_blank",rel:"noopener noreferrer"}},[s._v("OPENMPI"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("以及CUDA编译环境（如果需要GPU加速）：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://developer.nvidia.com/cuda-downloads",title:"CUDA官网下载页",target:"_blank",rel:"noopener noreferrer"}},[s._v("CUDA"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("安装neb版本需要下载额外的vtstcode：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://theory.cm.utexas.edu/vtsttools/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Transition State Tools for VASP"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"编译方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译方法"}},[s._v("#")]),s._v(" 编译方法")]),s._v(" "),t("p",[s._v("我们购买VASP后会得到它的源码包，例如"),t("code",[s._v("vasp5.4.4.tar.gz")]),s._v("。在此我们介绍在linux平台下使用 "),t("code",[s._v("intel compiler")]),s._v(" 及 "),t("code",[s._v("mpich")]),s._v(" 编译VASP的方法。")]),s._v(" "),t("h3",{attrs:{id:"加载编译环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载编译环境"}},[s._v("#")]),s._v(" 加载编译环境")]),s._v(" "),t("p",[s._v("不同的平台，编译器的安装及加载方式不同，在此给出最常见的加载方式：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# only on ln2 (192.168.2.4)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/intel2015/bin/compilervars.sh intel64\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mpi-intel2015/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mpi-intel2015/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"安装包配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装包配置"}},[s._v("#")]),s._v(" 安装包配置")]),s._v(" "),t("p",[s._v("假设安装包 "),t("code",[s._v("vasp.5.4.4.tar.gz")]),s._v(" 存放在用户根目录下，我们进入根目录，解压缩安装包，并进入解压后的目录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~ \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf vasp.5.4.4.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vasp.5.4.4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"修改makefile文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改makefile文件"}},[s._v("#")]),s._v(" 修改makefile文件")]),s._v(" "),t("p",[s._v("我们从"),t("code",[s._v("arch")]),s._v("文件夹拷贝一个配置文件到当前目录，然后根据当前系统环境进行适当修改。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v("  ./arch/makefile.include.linux_intel  makefile.include\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("简要分析makefile.include，说几个我们可能会修改的部分吧：")]),s._v(" "),t("h4",{attrs:{id:"预处理配置参数cpp-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预处理配置参数cpp-options"}},[s._v("#")]),s._v(" 预处理配置参数CPP_OPTIONS")]),s._v(" "),t("div",{staticClass:"language-makefile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Precompiler options                 ")]),s._v("\nCPP_OPTIONS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -DHOST"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v('\\"LinuxIFC\\"\\\n             -DMPI -DMPI_BLOCK'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("8000 \\\n             -Duse_collective \\\n             -DscaLAPACK \\\n             -DCACHE_SIZE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("4000 \\\n             -Davoidalloc \\\n             -Duse_bse_te \\\n             -Dtbdyn \\\n             -Duse_shmem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("说明：")]),s._v(" "),t("ul",[t("li",[s._v("这部分是一些预编译选项，以前的版本中（5.3及以前），如果我们想让vasp支持自旋轨道耦合计算，就需要调整这个参数。但从5.4.1开始，默认情况下我们就可以编译出 std 、 ncl 及 gam 版本的vasp，所以暂时不需要手动修改了。")])]),s._v(" "),t("h4",{attrs:{id:"编译和链接命令参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译和链接命令参数"}},[s._v("#")]),s._v(" 编译和链接命令参数")]),s._v(" "),t("div",{staticClass:"language-makefile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改前")]),s._v("\nFC         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mpiifort\nFCL        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mpiifort -mkl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sequential -lstdc++\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改后")]),s._v("\nFC         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mpif90\nFCL        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mpif90  -mkl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sequential -lstdc++\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("说明：")]),s._v(" "),t("ul",[t("li",[s._v("这部分是用来设定编译时候的编译器及链接参数。"),t("code",[s._v("mpiifort")]),s._v("是 "),t("code",[s._v("Intel IMPI")]),s._v("的命令，我们使用的是 "),t("code",[s._v("mpich")]),s._v("，所以这里需要修改一下，将以上两行中的"),t("code",[s._v("mpiifort")]),s._v("修改为"),t("code",[s._v("mpif90")])])]),s._v(" "),t("h4",{attrs:{id:"数学库参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数学库参数"}},[s._v("#")]),s._v(" 数学库参数")]),s._v(" "),t("div",{staticClass:"language-makefile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[s._v("MKL_PATH   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MKLROOT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/lib/intel64\nBLAS       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nLAPACK     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nBLACS      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -lmkl_blacs_intelmpi_lp64\nSCALAPACK  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MKL_PATH"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/libmkl_scalapack_lp64.a "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BLACS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("说明")]),s._v(" "),t("ul",[t("li",[s._v("这部分是用来定义一些数学库的，BLAS/LAPACK之所以为空，是应为在“FCL”命令中，加入了“-mkl”这个参数，它会自动的链接所需的MKL库。\n特别要指出的是，在以前的vasp版本中，BLACS变量默认是“-lmkl_blacs_openmpi_lp64”，我们需要手动修改一下，改为“-lmkl_blacs_intelmpi_lp64”，现在就不用了。因此vasp5.4以后，编译变得简单了许多。")])]),s._v(" "),t("h3",{attrs:{id:"编译make"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译make"}},[s._v("#")]),s._v(" 编译make")]),s._v(" "),t("p",[s._v("直接执行make即可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("编译成功后会在bin文件夹下生成三个可执行文件vasp_std、vasp_ncl及vasp_gam。")]),s._v(" "),t("h3",{attrs:{id:"配置运行环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置运行环境"}},[s._v("#")]),s._v(" 配置运行环境")]),s._v(" "),t("p",[s._v("每次运行 vasp 可执行程序时，需要我们配置可执行程序的路径，以及依赖的动态库路径，如果我们是在用户根目录下编译的vasp，那么运行前请执行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vasp")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/vasp.5.4.4/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个目录可以依据实际目录调整")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# intel 库环境")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LUSTRE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F / "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LUSTRE")]),s._v("/intel2015_lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"编译方法-简化脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译方法-简化脚本"}},[s._v("#")]),s._v(" 编译方法（简化脚本）")]),s._v(" "),t("p",[s._v("以上编译的步骤，我们可以写成一个脚本进行实现，你需要的做的是：")]),s._v(" "),t("ol",[t("li",[s._v("将源码包 "),t("code",[s._v("vasp.5.4.4.tar.gz")]),s._v(" 和 编译脚本"),t("code",[s._v("make-vasp5.4.4-th1a.sh")]),s._v(" 放在统一目录下")]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("source make-vasp5.4.4-th1a.sh")])]),s._v(" "),t("li",[s._v("等待直到编译完成（需要几十分钟）。")])]),s._v(" "),t("p",[s._v("脚本内容就是上面介绍的几个步骤，只是用命令来实现的，建议把以下脚本内容保存为shell脚本，例如名为"),t("code",[s._v("make-vasp5.4.4-th1a.sh")]),s._v("，然后上传到集群目录，并执行脚本即可。")]),s._v(" "),t("p",[s._v("脚本内容如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# filename : make-vasp5.4.4-th1a.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ln2'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Intel compiler 2015 only on ln2, ip is 192.168.2.4"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Please ssh username@192.168.2.5 and try again"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LUSTRE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F / "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# only on ln2 (192.168.2.4)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/intel2015/bin/compilervars.sh intel64\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mpi-intel2015/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mpi-intel2015/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vasp")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf vasp.5.4.4.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vasp.5.4.4\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp makefile.include")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v("  arch/makefile.include.linux_intel  makefile.include \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# change makefile.include")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/mpiifort/mpif90/"')]),s._v(" makefile.include\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" m.log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("下面举例说明如何在天河超算平台下，通过 "),t("code",[s._v("slurm")]),s._v(" 作业管理系统，提交vasp程序。")]),s._v(" "),t("h3",{attrs:{id:"准备输入文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备输入文件"}},[s._v("#")]),s._v(" 准备输入文件")]),s._v(" "),t("p",[s._v("准备一个输入文件，如用vasp的一个标准beachmark算例。")]),s._v(" "),t("h3",{attrs:{id:"编写提交脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写提交脚本"}},[s._v("#")]),s._v(" 编写提交脚本")]),s._v(" "),t("p",[s._v("编写一个名为sub.sh的脚本文件，里面写：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加动态库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LUSTRE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F / "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LUSTRE")]),s._v("/intel2015_lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行算例")]),s._v("\nyhrun -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug /path/to/vasp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("参数说明如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("yhrun")]),s._v(" "),t("td",[s._v("slurm作业管理系统中，并行执行mpi程序的命令，类似mpirun")])]),s._v(" "),t("tr",[t("td",[s._v("-N")]),s._v(" "),t("td",[s._v("任务所需的总节点数")])]),s._v(" "),t("tr",[t("td",[s._v("-n")]),s._v(" "),t("td",[s._v("任务所需的总核数")])]),s._v(" "),t("tr",[t("td",[s._v("-p")]),s._v(" "),t("td",[s._v("计算分区")])]),s._v(" "),t("tr",[t("td",[s._v("/path/to/vasp_std")]),s._v(" "),t("td",[s._v("vasp_std可执行程序所在位置，"),t("strong",[s._v("请替换为实际的路径")])])])])]),s._v(" "),t("p",[s._v("vasp_std命令会自动寻找当前目录下的INCAR文件作为输入文件进行计算。")]),s._v(" "),t("h3",{attrs:{id:"提交任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交任务"}},[s._v("#")]),s._v(" 提交任务")]),s._v(" "),t("p",[s._v("使用yhbatch命令提交作业：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhbatch -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug sub.sh  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看结果"}},[s._v("#")]),s._v(" 查看结果")]),s._v(" "),t("p",[s._v("计算完成后会在默认的输出文件OUTCAR中生成结果文件，查看是否正确。")]),s._v(" "),t("h2",{attrs:{id:"进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[s._v("#")]),s._v(" 进阶")]),s._v(" "),t("p",[s._v("vasp的编译除了这些之外，还有几种其他的情况：")]),s._v(" "),t("ul",[t("li",[s._v("编译neb版本的vasp")]),s._v(" "),t("li",[s._v("编译gpu版本的vasp")]),s._v(" "),t("li",[s._v("编译只优化固定轴的vasp")]),s._v(" "),t("li",[s._v("编译支持wannier90的vasp")]),s._v(" "),t("li",[s._v("编译5.3.5及以前版本的vasp（修改makefile比较复杂）")])]),s._v(" "),t("p",[s._v("这些内容如果有感兴趣的朋友可以联系我。")])])}),[],!1,null,null,null);a.default=n.exports}}]);