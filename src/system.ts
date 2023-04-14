import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: true,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI Vercel
- 本网站基于ChatGPT和Github开源项目制作 
- 仅供独众传媒内部使用 切勿外传 避免网站被封！！！
- 本网站由何高阳开发与维护，未经允许不得用于商业用途
- 在使用过程中遇到任何问题可以联系本人[QQ](https://qm.qq.com/cgi-bin/qm/qr?k=9sBonSEvwvNEA-vLiJHZpL4sAD2DouCW&noverify=0&personal_qrcode_source=4)
==================================
- [[Shift]] + [[Enter]] 文字换行。开头输入 [[/]] 使用提问辅助。`

<details>
<summary>展开/收起</summary>

export  const  defaultMessage  =  `网站使用方法
左下角小齿轮

系统角色指令：会在每次提问时添加。主要用于对 ChatGPT 的语气，口头禅这些进行定制。

思维发散程度：越高 ChatGPT 思维就越发散，开始乱答。根据不同的问题可以调节这个选项，创意性的就可以调高一点。

开启连续对话：OpenAI 并没有提供 ChatGPT 那样的上下文功能，只能每次都把全部对话传过去，并且都要算 token，而且仍然有最大 4096 token 的限制。

OpenAI 模型：需要注意的是, 只有获得了 GPT4 API 内测资格的用户才可以使用您的 API KEY 调用 GPT4。不同的模型对应的 token 最大值不同，比如 gpt-3.5-turbo 的最大 token 为 4k(4096)，gpt-4 的最大 token 为 8k(8192)，gpt-4-32k 的最大 token 为 32k(32768)。不同模型的价格也不同，具体可以查看 OpenAI 价格。

token 是怎么算的：OpenAI 有它自己的算法，大多数时候是一个单词 1 token，一个汉字 2 token。

输入框右边的四个按钮：

对话生成图片，电脑上是复制到剪贴板，手机上是直接下载。
对话生成 Markdown，复制到剪贴板。
清空对话。

消息：

点击每条消息前的头像可以锁定对话，清空对话时不会清除。
对于提问，可以修改，重新回答，删除。修改是填入输入框。重新回答和删除会自动删除提问和回答。
对于回答，可以复制，重新回答，删除。重新回答也会自动删除提问和回答。删除只会删除回答。

Enter发送，Shift+Enter换行。
空格 或者 / 搜索 问题预设，现在只显示 20 个。
↑ 将最近的一次提问填到输入框里。

点击顶部标题滚动到顶部，点击输入框滚动到底部。`

</details>

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
