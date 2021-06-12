(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{473:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("Ultrascale Visualization Climate Data Analysis Tools\n官网介绍："),t("a",{attrs:{href:"http://uvcdat.llnl.gov/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1),s._v("。\n安装说明参考："),t("a",{attrs:{href:"https://github.com/UV-CDAT/uvcdat/wiki/Install-on-RedHat-or-CentOS",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://heanet.dl.sourceforge.net/project/cdat/Releases/UV-CDAT/2.0.0/qt-CentOS-6.5-RedHat6-64bit-4.8.4.tar.bz2",target:"_blank",rel:"noopener noreferrer"}},[s._v("qt-CentOS-6.5-RedHat6-64bit-4.8.4"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://ncu.dl.sourceforge.net/project/cdat/Releases/UV-CDAT/2.2.0/UV-CDAT-2.2.0-CentOS-6.5-RedHat6-64bit.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[s._v("UV-CDAT-2.2.0-CentOS-6.5-RedHat6-64bit"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"解压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压缩"}},[s._v("#")]),s._v(" 解压缩")]),s._v(" "),t("p",[s._v("下载得到2个压缩包：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("qt-CentOS-6.5-RedHat6-64bit-4.8.4.tar.bz2\nUV-CDAT-2.2.0-CentOS-6.5-RedHat6-64bit.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("解压缩，并复制到指定目录。例如$HOME/software/uvcdat目录。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/software/uvcdat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvf qt-CentOS-6.5-RedHat6-64bit-4.8.4.tar.bz2 -C ~/software/uvcdat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ~/software/uvcdat/usr/local/Qt  ~/software/uvcdat\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvf UV-CDAT-2.2.0-CentOS-6.5-RedHat6-64bit.tar.gz -C ~/software/uvcdat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ~/software/uvcdat/usr/local/uvcdat  ~/software/uvcdat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/software/uvcdat/usr\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("备注：为了放置到自己的目录下，而不是/usr/local")]),s._v(" "),t("h2",{attrs:{id:"设置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置环境变量"}},[s._v("#")]),s._v(" 设置环境变量")]),s._v(" "),t("p",[s._v("打开bashrc文件，进行环境变量配置。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加如下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# QT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/uvcdat/Qt/4.8.4/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/uvcdat/Qt/4.8.4/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# UVCDAT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/uvcdat/uvcdat/2.2.0/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/uvcdat/uvcdat/2.2.0/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("重新加载bashrc文件以便环境变量生效。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("备注：注意软件版本，上述为qt为4.8.4，UV-CDAT为2.2.0版本。")]),s._v(" "),t("h2",{attrs:{id:"修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),t("p",[s._v("修改文件 ~/software/uvcdat/uvcdat/2.2.0/bin/setup_runtime.sh")]),s._v(" "),t("p",[s._v("将：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("install_prefix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/uvcdat/2.2.0"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("改为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("install_prefix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/software/uvcdat/uvcdat/2.2.0"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改文件 ~/software/uvcdat/uvcdat/2.2.0/bin/uvcdat")]),s._v(" "),t("p",[s._v("将：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/uvcdat/2.2.0/bin/setup_runtime.sh"')]),s._v("\n\npython2.7 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/uvcdat/2.2.0/vistrails/vistrails/uvcdat.py"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("改为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/software/uvcdat/uvcdat/2.2.0/bin/setup_runtime.sh"')]),s._v("\npython2.7 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/software/uvcdat/uvcdat/2.2.0/vistrails/vistrails/uvcdat.py"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("在终端运行命令即可启动：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("uvcdat\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("请使用支持图形界面的ssh工具，例如xmanage。另外，远程使用图形界面需要保证一定的带宽以确保流畅度。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);