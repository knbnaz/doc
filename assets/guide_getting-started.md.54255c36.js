import{_ as a,o,c as i,V as t}from"./chunks/framework.7ae304b1.js";const p="/images/plugin_market_2.png",c="/images/plugin_market_3.png",r="/images/plugin_market_5.png",d="/images/plugin_market_1.png",l="/images/plugin_market_6.png",e="/images/model_list_1.png",s="/images/error_1.png",h="/images/set_model_1.png",n="/images/chat_openai_1.png",v=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":1689270944000}'),u={name:"guide/getting-started.md"},m=t('<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><p>接下来就让我们开始初步安装，配置与使用 ChatHub 吧！</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="安装-koishi" tabindex="-1">安装 Koishi <a class="header-anchor" href="#安装-koishi" aria-label="Permalink to &quot;安装 Koishi&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在安装 Koishi 前，你需要检查 Node 版本。Koishi 本身要求最低在 Node 14 上运行。但本项目的依赖库需求最低版本为 Node 18。因此如果你需要使用本项目，你需要确保你安装的 Node 版本在 18 以上。</p><p>你可以使用 <code>node -v</code> 来检查 Node 版本。</p><p>还需要注意，截止目前 <code>1.0.0-alpha.0</code> 版本，我们需求最低Koishi版本为 <code>4.13.0</code>。因此你需要确保你的 Koishi 版本在 <code>4.13.0</code> 以上。</p></div><p>首先你需要安装 Koishi，你可以参考 <a href="https://koishi.chat/zh-CN/manual/starter/" target="_blank" rel="noreferrer">Koishi 官方文档</a> 来安装 Koishi。</p><p>当你成功安装并运行了 Koishi，就可以继续了。</p><h3 id="配置-koishi" tabindex="-1">配置 Koishi <a class="header-anchor" href="#配置-koishi" aria-label="Permalink to &quot;配置 Koishi&quot;">​</a></h3><p>安装好 Koishi 后，你还不能直接开始安装此插件，你需要接入真实聊天平台才能在这些聊天平台下使用此插件。点击 <a href="https://koishi.chat/zh-CN/manual/console/adapter.html" target="_blank" rel="noreferrer">这里</a> 查看如何接入聊天平台。</p><p>你可以选择暂时不接入，这样你仍然可以在 <a href="https://koishi.chat/zh-CN/manual/console/sandbox.html" target="_blank" rel="noreferrer">沙盒</a> 里使用此插件。</p><p>（我们推荐你在配置好任何插件后先在沙盒环境里测试插件是否正常运行）</p><h3 id="前置插件" tabindex="-1">前置插件 <a class="header-anchor" href="#前置插件" aria-label="Permalink to &quot;前置插件&quot;">​</a></h3><p>当你成功安装了 Koishi 并接入了聊天平台后，你仍然不能马上开始安装此插件。</p><p>由于 Koishi 丰富的 API 与生态，一个插件为了实现一个功能，并不总是自己全部实现，而是通过调用其他插件所提供的 API 来实现。这样编写插件，使得插件开发者可以专注于自己的功能，而不用去实现一些基础功能。</p><p>接下来就是安装此插件的依赖前置插件。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 Koishi 控制台里，安装了插件后 Koishi 会自动创建该插件的空配置项，并跳转到配置页面，默认为未启用插件状态。</p><p>你需要配置好插件配置项后，才能启用插件。</p><p>配置好插件配置项后，点击右上角的三角形按钮（也就是启用按钮）来启用插件。 请务必注意，如果你没有配置好插件配置项，启用插件后可能会导致插件无法正常运行。</p></div><h4 id="必须-提供了-database-服务的插件" tabindex="-1">(必须) 提供了 database 服务的插件 <a class="header-anchor" href="#必须-提供了-database-服务的插件" aria-label="Permalink to &quot;(必须) 提供了 database 服务的插件&quot;">​</a></h4><p>database 服务是此插件的必须服务依赖，它提供了对数据库的相关操作。</p><p>我们使用此服务来存储会话信息等持久化内容。</p><p>打开 Koishi 控制台，前往插件市场搜索<code>impl:database</code>，然后安装你偏好的数据库平台支持插件。</p><p><img src="'+p+'" alt="搜索后的结果"></p><p>对于大部分场景，我们推荐你使用<code>database-sqlite</code>，它轻量，并且无需额外配置，几乎是安装后开箱即用。</p><p>如果你需要使用其他数据平台支持插件，并且你安装插件后不知道如何配置的话，你可能需要前往 <a href="https://forum.koishi.xyz/" target="_blank" rel="noreferrer">Koishi 论坛</a> 寻求如何配置相关的插件。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在大部分安装 Koishi 方式中，安装 Koishi 后很可能会内置<code>database-sqlite</code>插件，如果你不需要配置其他数据库，你可以跳过这一步。</p></div><h4 id="必须-安装提供了-cache-服务的插件" tabindex="-1">(必须) 安装提供了 cache 服务的插件 <a class="header-anchor" href="#必须-安装提供了-cache-服务的插件" aria-label="Permalink to &quot;(必须) 安装提供了 cache 服务的插件&quot;">​</a></h4><p><code>由于chathub的特殊性，仅支持使用cache-database作为提供cache的插件</code></p><p>cache 服务是此插件的必须服务依赖，它提供了对缓存键值对的相关操作。</p><p>我们使用此服务来存储某些短期配置项，如默认模型等。</p><p>打开 Koishi 控制台，前往插件市场搜索<code>cache-database</code>，然后选择安装cache-database。</p><p><img src="'+c+'" alt="搜索后的结果"></p><p><code>cache-database</code>几乎无需额外配置，只需要你按照上面要求安装了提供 database 服务的插件，然后完全可以安装后开箱即用。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>我们依赖的 cache 服务相关版本至少为 <code>2.0.0.alpha.0</code>，请不要安装 <code>1.x</code> 版本，目前插件已不再兼容 <code>1.x</code> 版本。</p></div><h4 id="可选-安装-puppeteer-插件" tabindex="-1">(可选) 安装 puppeteer 插件 <a class="header-anchor" href="#可选-安装-puppeteer-插件" aria-label="Permalink to &quot;(可选) 安装 puppeteer 插件&quot;">​</a></h4><p>puppetter 插件是此插件的可选服务依赖，它提供了 puppeteer 相关服务，使得插件可以调用浏览器，实现很多操作。（如网页截图实现本地html渲染）</p><p>我们使用此服务来实现生成图片回复。如果你不安装提供了此服务的插件，你将无法使用回复模式里的图片模式。</p><p>打开 Koishi 控制台，前往插件市场搜索 <code>impl:puppeteer</code>，然后安装puppeteer 插件。</p><p>安装完成后你需要配置此插件，具体的插件配置项可以查看 <a href="https://puppeteer.koishi.chat/" target="_blank" rel="noreferrer">这里</a>，我们不在这里赘述。</p><h4 id="可选-安装提供了-censor-服务的插件" tabindex="-1">(可选) 安装提供了 censor 服务的插件 <a class="header-anchor" href="#可选-安装提供了-censor-服务的插件" aria-label="Permalink to &quot;(可选) 安装提供了 censor 服务的插件&quot;">​</a></h4><p>censor 服务是此插件的可选服务依赖，它提供了内容安全过滤服务。</p><p>我们使用此服务来实现回复内容安全过滤。</p><p>打开 Koishi 控制台，前往插件市场搜索<code>category:censor</code>，然后安装你偏好的内容安全过滤平台支持插件。</p><p>安装完成后你需要配置相关插件才能使用，具体的插件配置项可以查看 <a href="https://censor.koishi.chat/" target="_blank" rel="noreferrer">这里</a>，我们不在这里赘述。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>需要注意，有的插件虽然也提供 censor 服务， 但是它只对图像做审核，不会对文本内容做审核！因此你需要确保你安装的插件支持对文本内容做审核。</p></div><h4 id="可选-安装提供了-vits-服务的插件" tabindex="-1">（可选）安装提供了 vits 服务的插件 <a class="header-anchor" href="#可选-安装提供了-vits-服务的插件" aria-label="Permalink to &quot;（可选）安装提供了 vits 服务的插件&quot;">​</a></h4><p>vits 服务是此插件的可选服务依赖，它提供了文本转语音相关服务。</p><p>我们使用此服务来实现生成语音回复。如果你不安装提供了此服务的插件，你将无法使用回复模式里的语音模式。</p><p>打开 Koishi 控制台，前往插件市场搜索<code>impl:vits</code>，然后安装你偏好的文本转语音平台支持插件。</p><p><img src="'+r+'" alt="搜索后的结果"></p><p>安装后你可能还需要配置相关插件才能使用，具体怎么使用可以查看插件配置项的描述，或插件主页。（当然你也可以直接联系插件作者问）</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>我们推荐安装<code>open-vits</code>插件，这是可开箱即用提供了 vits 服务的插件，插件由 <a href="https://github.com/initialencounter" target="_blank" rel="noreferrer">initialencounter</a> 编写，并且后端是由 <a href="https://github.com/t4wefan" target="_blank" rel="noreferrer">t4wefan</a> 免费提供的公益 vits 后端，感谢他们的插件和后端提供能让 vits 服务的使用没有门槛！</p></div><h3 id="安装主插件" tabindex="-1">安装主插件 <a class="header-anchor" href="#安装主插件" aria-label="Permalink to &quot;安装主插件&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>主插件也就是 <code>@dingyi222666/chathub</code> 插件本体。该插件提供了 ChatHub 服务，核心功能，扩展 API等。在下文以及后续的文章中我们将使用主插件来指代 <code>@dingyi222666/chathub</code> 插件本体。</p></div><p>在安装和配置了这么多前置插件后，终于可以开始安装 ChatHub 的主插件了！</p><p>但请注意，安装完成后插件本体并不能直接使用哦。前面有提到 ChatHub 的扩展性，这种扩展性也体现在插件本身设计上。主插件本体没有任何模型平台的接入。所有接入都是通过其他 Koishi 插件，调用主插件的扩展 API 来实现。</p><p>打开 Koishi 控制台，前往插件市场搜索<code>@dingyi222666/chathub</code>，然后安装 主插件。</p><p><img src="'+d+'" alt="搜索后的结果"></p><p>安装完成后启用就可以了！当然我们还需要配置插件，在下面的配置章节会详细介绍。</p><h3 id="安装一个或多个模型平台适配器插件" tabindex="-1">安装一个或多个模型平台适配器插件 <a class="header-anchor" href="#安装一个或多个模型平台适配器插件" aria-label="Permalink to &quot;安装一个或多个模型平台适配器插件&quot;">​</a></h3><p>前面讲到了 ChatHub 插件本身没有任何模型平台的接入，所有接入都是通过其他的 Koishi 插件，调用主插件的扩展 API 来实现。</p><p>所以接下来我们就要安装模型平台适配器插件了。</p><p>打开 Koishi 控制台，前往插件市场搜索<code>@dingyi222666/chathub</code> + 空格 + <code>adapter</code> + 空格，然后安装你偏好的模型平台适配器插件。</p><p><img src="'+l+'" alt="搜索后的结果"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>你可以同时安装多个模型平台适配器插件，只需要使用命令即可切换不同模型平台来使用。</p></div><p>安装了相关适配器插件后，你还需要配置插件，在接下来的教程里我们只会简单介绍怎么配置<code>OpenAI</code>的适配器插件。</p><p>其他模型平台的配置教程可以在文档的 <a href="/guide/configure-model-platform.html">配置模型平台</a> 章节查看。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="配置主插件" tabindex="-1">配置主插件 <a class="header-anchor" href="#配置主插件" aria-label="Permalink to &quot;配置主插件&quot;">​</a></h3><p>在此章节我们只会简单介绍怎么配置主插件。 具体的配置项可以在 <a href="/guide/configurations/core.html">配置项</a> 章节查看。</p><p>打开 Koishi 控制台，前往插件配置，找到<code>@dingyi222666/chathub</code>插件，然后点击进入配置页面。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你安装了插件但是在插件配置页找不到相关插件，很可能是没有添加插件配置项，你可以在插件配置页点击到<code>全局设置</code>页面，然后点击右上角的<code>添加插件</code>按钮来添加插件。这将会添加你所选择添加插件的一个空配置项。</p></div><p>接下来我们会介绍几个基础但是很有用的配置项。其他配置项你可以在 <a href="/guide/configurations/core.html">配置项</a> 章节查看。</p><h4 id="isproxy" tabindex="-1">isProxy <a class="header-anchor" href="#isproxy" aria-label="Permalink to &quot;isProxy&quot;">​</a></h4><ul><li>类型：boolean</li><li>默认值：false</li></ul><p>是否使用代理配置。此配置影响到所有使用主插件相关网络请求 API 的插件。 由于各种原因，国内机器使用大部分的模型平台的 API 都需要使用代理，因此我们强烈建议你开启此配置项。</p><h4 id="proxyaddress" tabindex="-1">proxyAddress <a class="header-anchor" href="#proxyaddress" aria-label="Permalink to &quot;proxyAddress&quot;">​</a></h4><ul><li>类型: string (url)</li><li>默认值: &#39;&#39;</li></ul><p>代理地址。此配置影响到所有使用主插件相关网络请求 API 的插件。 此配置项只有在<code>isProxy</code>为<code>true</code>时才会显示（否则此配置项会被隐藏）。</p><p>目前我们支持 <code>http</code> 和 <code>socks5</code> 代理，你可以在此配置项里填写你的代理地址。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>需要注意的是，在填写代理地址时，你需要填写完整的代理地址，包括协议，端口等。 例如<code>http://localhost:7890</code></p><p>请不要忘记填写协议名！！！之前就有不少人使用了<code>localhost:7890</code>这样的地址，导致插件无法正常使用代理，进而导致插件无法正常使用。</p></div><h4 id="msgcooldown" tabindex="-1">msgCooldown <a class="header-anchor" href="#msgcooldown" aria-label="Permalink to &quot;msgCooldown&quot;">​</a></h4><ul><li>类型: number (seconds)</li><li>默认值: 5</li></ul><p>全局消息冷却时间。所有命令执行都会受到此配置项的影响。 大量命令执行可能会导致请求同一平台的并发请求过多（甚至能导致相关账号被封禁），因此我们建议你设置一个合理的冷却时间。</p><h4 id="outputmode" tabindex="-1">outputMode <a class="header-anchor" href="#outputmode" aria-label="Permalink to &quot;outputMode&quot;">​</a></h4><ul><li>类型: &#39;raw&#39; | &#39;voice&#39; | &#39;text&#39; | &#39;image&#39; | &#39;mixed-image&#39; | &#39;mixed-voice&#39;</li><li>默认值: &#39;text&#39;</li></ul><p>消息的输出格式。</p><h4 id="类型值详细说明" tabindex="-1">类型值详细说明 <a class="header-anchor" href="#类型值详细说明" aria-label="Permalink to &quot;类型值详细说明&quot;">​</a></h4><ul><li><p>&#39;raw&#39; (即为配置项的原始模式) 原始输出格式，不做任何处理。</p></li><li><p>&#39;voice&#39; (即为配置项里的语音模式)</p><p>语音模式，将会使用 vits 服务来将模型生成文本转为语音输出。</p></li><li><p>&#39;text&#39; (即为配置项里的文本模式) 文本模式，将会使用 <a href="https://markdown.koishi.chat/" target="_blank" rel="noreferrer">koishi-plugin-markdown</a> 来解析模型生成的文本，然后输出。 （由于大部分模型都支持甚至默认生成 markdown 格式的文本，因此我们推荐使用此模式）</p></li><li><p>&#39;mixed-image&#39; (即为配置项的混合文本+图像模式)</p><p>混合模式，将会使用 <a href="https://marked.js.org/" target="_blank" rel="noreferrer">marked</a> 来解析模型生成的 markdown 格式的文本，然后将解析后文本分割成多条消息块，判断每个消息块是否含有部分 markdown 文本来确定是否需要渲染成图片（否则渲染成文本），然后输出。</p></li><li><p>&#39;mixed-voice&#39; (即为配置项的混合文本+语音模式)</p><p>混合模型，将会使用 <a href="https://markdown.koishi.chat/" target="_blank" rel="noreferrer">koishi-plugin-markdown</a> 来解析模型生成的文本，然后在叠加 vits 服务来将模型生成的文本转为语音的结果，最后一起输出</p></li></ul><p>基础配置完成后，你就可以启用主插件了。</p><h3 id="配置-openai-模型平台" tabindex="-1">配置 (OpenAI) 模型平台 <a class="header-anchor" href="#配置-openai-模型平台" aria-label="Permalink to &quot;配置 (OpenAI) 模型平台&quot;">​</a></h3><p>在此章节我们只会简单介绍怎么配置<code>OpenAI</code>的适配器插件。 其他模型平台的配置教程可以在文档的 <a href="/guide/configure-model-platform.html">配置模型平台</a> 章节查看。</p><p>前置要求：</p><ul><li><p>你需要有一个 OpenAI 的 API Key，并且保证此 API Key 拥有可用额度。</p><p>如果你没有的话，你可以自行搜索教程来了解如何获取。</p></li><li><p>你需要有条件能访问到<code>api.openai.com</code>，包括使用代理，或使用反代了 OpenAI 的 API 的服务。 需要注意的是，直接使用代理访问 OpenAI 的 API 服务可能会含有一定的风险，你需要检查你的代理的IP地址的纯净度。</p><p>如果你使用的代理，你需要在主插件里配置<code>isProxy</code>为<code>true</code>，并且配置<code>proxyAddress</code>为你的代理地址。</p></li></ul><p>接下来我们就可以开始配置了。</p><p>打开 Koishi 控制台，前往插件配置，找到<code>@dingyi222666/chathub-adapter-openai</code>插件，然后点击进入配置页面。</p><p>对于快速上手，我们只需要关注<code>请求设置</code>的相关配置项即可。详细的配置项可以在 <a href="/guide/configure-model-platform/openai.html">配置项</a> 章节查看。</p><h4 id="apikey" tabindex="-1">apiKey <a class="header-anchor" href="#apikey" aria-label="Permalink to &quot;apiKey&quot;">​</a></h4><ul><li>类型: string</li><li>默认值: &#39;&#39;</li><li>是否必须: 是</li></ul><p>OpenAI 的 API Key。你需要填写你的 OpenAI 的 API Key。否则插件将无法正常使用。</p><h4 id="apiendpoint" tabindex="-1">apiEndPoint <a class="header-anchor" href="#apiendpoint" aria-label="Permalink to &quot;apiEndPoint&quot;">​</a></h4><ul><li>类型: string (url)</li><li>默认值: <code>https://api.openai.com/v1</code></li><li>是否必须: 是</li></ul><p>请求 OpenAI 的 API 的基础域名地址。此配置通常用于设置反代了OpenAI的API的服务地址。如果你使用的是代理，你可以不用配置此项。</p><p>如果你使用的是反代了OpenAI的API的服务，你需要填写你的反代服务的地址。 需要注意的是，在填写反代服务的地址时，你需要加上<code>/v1</code>后缀。例如<code>https://api.openai-proxy.com/v1</code></p><p>基础配置<code>OpenAI</code>的适配器插件完成后，你就可以启用此插件了。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>接入到 ChatHub 的模型平台插件，在第一次启用时，都需要先启用主插件，然后再启用模型平台插件。（后续都要启用相关插件）请务必注意启用顺序。</p></div><p>你可以使用<code>chathub.listmodel</code> (或<code>模型列表</code>)命令来查看当前已经安装的模型平台插件。 只要能列出以<code>openai</code>为前缀的模型，就说明你已经成功的安装了<code>OpenAI</code>的适配器插件。</p><p><img src="'+e+'" alt="执行了模型列表命令的结果"></p><h3 id="配置默认模型" tabindex="-1">配置默认模型 <a class="header-anchor" href="#配置默认模型" aria-label="Permalink to &quot;配置默认模型&quot;">​</a></h3><p>如果你按照了上述的步骤来安装和配置插件，那么你现在基本已经可以使用插件了。</p><p>但是...，是的，还没有结束！</p><p>当你配置好了主插件和平台插件时，兴冲冲使用<code>聊天</code>命令尝试一番，你只会得到这样的结果：</p><p><img src="'+s+'" alt="执行了聊天命令的结果"></p><p>由于你没有设置任何一个模型为默认模型，因此插件并不知道你想使用哪个模型来聊天。</p><p>在<code>0.x</code>版本中，每个模型/平台插件都会提供一个<code>isDefault</code>配置项，你可以在配置此配置项为<code>true</code>来设置此模型为默认模型。</p><p>但在<code>1.x</code>版本中，我们将此配置项移除了，因为我们认为这种设计并不合理。这会导致每个插件都要设置在自己插件里的默认模型。</p><p>我们使用<code>chathub.setmodel</code>(或<code>切换模型</code>)命令来设置默认模型。</p><p>首先需要使用<code>chathub.listmodel</code>(或<code>模型列表</code>)命令，来查看当前已经安装的模型平台插件。</p><p>例如： <img src="'+e+'" alt="执行了模型列表命令的结果"></p><p>使用<code>chathub.setmodel</code>(或<code>切换模型</code>)命令来设置默认模型： <img src="'+h+'" alt="执行了切换模型命令的结果"></p><h2 id="聊天" tabindex="-1">聊天 <a class="header-anchor" href="#聊天" aria-label="Permalink to &quot;聊天&quot;">​</a></h2><p>接下来就可以使用<code>chathub.chat</code>(或<code>聊天</code>)命令来和模型聊天了！ <img src="'+n+'" alt="执行了聊天命令的结果"></p><p>通过上面的快速上手教程，你已经成功安装了此插件，并且能和模型对话了！</p><h2 id="接下来" tabindex="-1">接下来 <a class="header-anchor" href="#接下来" aria-label="Permalink to &quot;接下来&quot;">​</a></h2><p>然而我知道你还有很多疑问，比如：</p><ul><li>如何配置其他模型平台？</li><li>如何配置预设？</li></ul><p>接下来你可以自由按照侧边栏的文章教程来学习需要的内容，或点击页面的下一篇来继续阅读教程。</p>',125),b=[m];function k(g,f,_,P,x,q){return o(),i("div",null,b)}const A=a(u,[["render",k]]);export{v as __pageData,A as default};
