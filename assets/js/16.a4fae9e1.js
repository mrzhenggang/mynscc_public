(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{445:function(t,e,r){"use strict";r.r(e);var s=r(15),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"登陆服务器和数据传输"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#登陆服务器和数据传输"}},[t._v("#")]),t._v(" 登陆服务器和数据传输")]),t._v(" "),r("h2",{attrs:{id:"登陆服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#登陆服务器"}},[t._v("#")]),t._v(" 登陆服务器")]),t._v(" "),r("p",[t._v("按照以上方式成功登陆中心的 VPN 后，用户则可以通过 ssh 服务登陆天河系统登陆结点来使用中心资源。为了保证用户的数据安全，中心不提供 telnet 等其他连接方式。")]),t._v(" "),r("p",[t._v("中心资源通过 TCP 应用的方式供用户使用，如图 2-11 所示，用户成功登陆VPN 后，可以看到自己允许使用的资源。TH-1A 系统具有 TH-1A-LN1，TH-1A-LN2，TH-1A-LN3，TH-1A-LN8，TH-1A-LN9 的 TCP 应用，用户可以使用 ssh客户端软件（如 SSH Secure Shell Client，SecureCRT，Putty）来登录系统。SSH\nSecure Shell Client，SecureCRT，Putty 等均为免费软件，网络上均有下载。")]),t._v(" "),r("p",[t._v("登录时，请在 Host Name 项填写登陆节点对应的 IP 地址，端口为 22，输入相应的系统账户名和密码即可。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/user-manual-th1a/SSH-Secure-Shell-Client-login.png",alt:"SSH-Secure-Shell-Client"}})]),t._v(" "),r("center",[t._v("图 SSH-Secure-Shell-Client登录")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/user-manual-th1a/SecureCRT-login.png",alt:"SSH-Secure-Shell-Client"}})]),t._v(" "),r("center",[t._v("图 SecureCRT-login登录")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/user-manual-th1a/Putty-login.png",alt:"SSH-Secure-Shell-Client"}})]),t._v(" "),r("center",[t._v("图 Putty登录")]),t._v(" "),r("p",[t._v("这里我们推荐使用 Mobaxterm 的免费版 登录系统，详见："),r("a",{attrs:{href:"https://mrzhenggang.com/supercomputer-courses/ssh-sftp-mobaxterm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mobaxterm工具"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("特别注意")]),t._v(" "),r("ul",[r("li",[t._v("TH-1A 系统的 LN1-3，LN8-9 为登陆结点，只负责用户的登陆，编译、提交任务等操作，不允许直接运行可执行程序。（详细描述见“1.1.1 小节”）")]),t._v(" "),r("li",[t._v("为了保障系统安全，用户密码连续输入错误 5 次以后，将被禁止登录 10 分钟。")]),t._v(" "),r("li",[t._v("系统会监控用户的行为，如果用户故意实施对系统造成危害的行为，我们保留对该用户采取法律手段的权利。")])])]),t._v(" "),r("h2",{attrs:{id:"文件传输"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件传输"}},[t._v("#")]),t._v(" 文件传输")]),t._v(" "),r("p",[t._v("目前 TH-1A 系统有 LN3 和 LN9 提供数据的上传、下载服务。Linux 和 Mac用户可以直接使用 scp / rsync 等命令拷贝数据，此处不再详述。")]),t._v(" "),r("p",[t._v("Windows 用户：从外部客户端向 TH-1A 系统中上传或下载文件，可以使用 sftp 客户端，例如 SSH Secure Shell Client 等本身自带的文件传输功能。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/user-manual-th1a/SSH-Secure-Shell-Client-transport.png",alt:"SSH-Secure-Shell-Client"}})]),t._v(" "),r("center",[t._v("图 SSH-Secure-Shell-Client 传输")]),t._v(" "),r("p",[t._v("或者使用 WinScp 的 sftp 数据传输软件（免费软件，网络容易下载，且该软件\n支持断点续传，推荐使用）")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/user-manual-th1a/winscp-login.png",alt:"SSH-Secure-Shell-Client"}})]),t._v(" "),r("center",[t._v("图 WinScp 登录 ")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("推荐使用 WinSCP 传输软件，它支持断点续传。")])]),t._v(" "),r("h2",{attrs:{id:"退出系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#退出系统"}},[t._v("#")]),t._v(" 退出系统")]),t._v(" "),r("p",[t._v("执行"),r("code",[t._v("exit")]),t._v("命令或按"),r("code",[t._v("ctrl-d")]),t._v("键，即可退出系统。")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);