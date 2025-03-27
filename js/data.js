const unit1Words = [
    {
        word: "succeed",
        pronunciation: "[səkˈsiːd]",
        partOfSpeech: "v.",
        definition: "成功",
        memoryTip: "suc(下)+ceed(走)→走下去→坚持就是成功",
        usage: "succeed in sth. 在某事上取得成功"
    },
    {
        word: "success",
        pronunciation: "[səkˈses]",
        partOfSpeech: "n.",
        definition: "成功",
        memoryTip: "词根cess常用于名词，ceed用于动词"
    },
    {
        word: "triumph",
        pronunciation: "[ˈtraɪʌmf]",
        partOfSpeech: "n./v.",
        definition: "伟大胜利；战胜",
        memoryTip: "Trump（特朗普）获得了triumph（胜利）"
    },
    {
        word: "succession",
        pronunciation: "[səkˈseʃn]",
        partOfSpeech: "n.",
        definition: "一连串；继任",
        memoryTip: "suc(下)+cess(走)+ion(名词后缀)→继任，接下来",
        usage: [
            "a succession of sth. 一系列的……",
            "in succession 接连地，连续地"
        ]
    },
    {
        word: "successor",
        pronunciation: "[səkˈsesə(r)]",
        partOfSpeech: "n.",
        definition: "继任者",
        memoryTip: "(往下走的人)"
    },
    {
        word: "predecessor",
        pronunciation: "[ˈpriːdɪsesə(r)]",
        partOfSpeech: "n.",
        definition: "前任者",
        memoryTip: "(走在前面的人)"
    },
    {
        word: "access",
        pronunciation: "[ˈækses]",
        partOfSpeech: "n./v.",
        definition: "渠道；门路；机会；到达；访问；使用",
        memoryTip: "ac(加强)+cess(走)→走向目标",
        isKey: true
    },
    {
        word: "accessible",
        pronunciation: "[əkˈsesəbl]",
        partOfSpeech: "adj.",
        definition: "可到达的；可接近的",
        usage: "easily accessible 容易到达的；容易接近的(门槛低)"
    },
    {
        word: "exceed",
        pronunciation: "[ɪkˈsiːd]",
        partOfSpeech: "v.",
        definition: "超过，超越(应有的限制、限度)",
        memoryTip: "ex('溢'出)+ceed(走)→走过头→超过限度"
    },
    {
        word: "excel",
        pronunciation: "[ɪkˈsel]",
        partOfSpeech: "v.",
        definition: "优于，胜过；擅长，突出"
    },
    {
        word: "excellence",
        pronunciation: "[ˈeksələns]",
        partOfSpeech: "n.",
        definition: "优秀，杰出"
    },
    {
        word: "excessive",
        pronunciation: "[ɪkˈsesɪv]",
        partOfSpeech: "adj.",
        definition: "过度的；过分的",
        memoryTip: "excess(过度)+ive(形容词后缀)→过度的",
        isKey: true
    },
    {
        word: "extreme",
        pronunciation: "[ɪkˈstri:m]",
        partOfSpeech: "adj.",
        definition: "极端的",
        partOfSpeech2: "n.",
        definition2: "极端"
    },
    {
        word: "precede",
        pronunciation: "[prɪˈsiːd]",
        partOfSpeech: "v.",
        definition: "先于，在……之前发生、出现",
        memoryTip: "pre(预先)+ced(走)→走在前面→先于"
    },
    {
        word: "preceding",
        pronunciation: "[prɪˈsiːdɪŋ]",
        partOfSpeech: "adj.",
        definition: "先前的",
        usage: "the preceding generation 上一代人，先辈"
    },
    {
        word: "precedent",
        pronunciation: "[ˈpresɪdənt]",
        partOfSpeech: "n.",
        definition: "先例",
        memoryTip: "preced(先前)+ent(人、事、物后缀)→先前的事物→先例"
    },
    {
        word: "unprecedented",
        pronunciation: "[ʌnˈpresɪdentɪd]",
        partOfSpeech: "adj.",
        definition: "前所未有的",
        usage: "unprecedented success 空前的成功"
    },
    {
        word: "proceed",
        pronunciation: "[prəˈsiːd]",
        partOfSpeech: "v.",
        definition: "前进；继续做",
        memoryTip: "pro(深入)+ceed(走)→前进"
    },
    {
        word: "advance",
        pronunciation: "[ədˈvæns]",
        partOfSpeech: "v.",
        definition: "进步；前进",
        partOfSpeech2: "n.",
        definition2: "进步；前进"
    },
    {
        word: "advanced",
        pronunciation: "[ədˈvænst]",
        partOfSpeech: "adj.",
        definition: "先进的，高等的"
    },
    {
        word: "process",
        pronunciation: "[ˈprəʊses]",
        partOfSpeech: "n.",
        definition: "过程；进程",
        pronunciation2: "[prəˈses]",
        partOfSpeech2: "v.",
        definition2: "加工；处理",
        memoryTip: "pro(深入)+cess(赛丝)→经过深度加工处理，变得'丝般顺滑'",
        isKey: true
    },
    {
        word: "procedure",
        pronunciation: "[prəˈsiːdʒə(r)]",
        partOfSpeech: "n.",
        definition: "程序；手续",
        memoryTip: "proced(前进)+dur(经过)→前进的过程性→程序；手续"
    },
    {
        word: "endure",
        pronunciation: "[ɪnˈdʊr]",
        partOfSpeech: "v.",
        definition: "忍受，忍耐"
    },
    {
        word: "recession",
        pronunciation: "[rɪˈseʃn]",
        partOfSpeech: "n.",
        definition: "衰退；倒退",
        memoryTip: "re(往回)+cess(走)+ion(名词后缀)→衰退",
        usage: "the Great Recession 特指经济大萧条、大衰退"
    },
    {
        word: "act",
        pronunciation: "[ækt]",
        partOfSpeech: "v.",
        definition: "行动；做；假装；表演",
        partOfSpeech2: "n.",
        definition2: "行为；(戏剧)幕",
        usage: "act as if + 句子 表现得就好像……一样"
    },
    {
        word: "actor",
        pronunciation: "[ˈæktə(r)]",
        partOfSpeech: "n.",
        definition: "演员"
    },
    {
        word: "actress",
        pronunciation: "[ˈæktrəs]",
        partOfSpeech: "n.",
        definition: "女演员",
        memoryTip: "后缀-ess意为'女性'，如goddess"
    },
    {
        word: "action",
        pronunciation: "[ˈækʃn]",
        partOfSpeech: "n.",
        definition: "行为，作为"
    },
    {
        word: "active",
        pronunciation: "[ˈæktɪv]",
        partOfSpeech: "adj.",
        definition: "活跃的"
    },
    {
        word: "activity",
        pronunciation: "[ækˈtɪvəti]",
        partOfSpeech: "n.",
        definition: "活动"
    },
    {
        word: "actual",
        pronunciation: "[ˈæktʃuəl]",
        partOfSpeech: "adj.",
        definition: "实际的"
    },
    {
        word: "actually",
        pronunciation: "[ˈæktʃuəli]",
        partOfSpeech: "adv.",
        definition: "实际上"
    },
    {
        word: "activate",
        pronunciation: "[ˈæktɪveɪt]",
        partOfSpeech: "v.",
        definition: "激活",
        memoryTip: "active(活跃的)+ate(使动后缀)→使它活跃"
    },
    {
        word: "activation",
        pronunciation: "[ˌæktɪˈveɪʃn]",
        partOfSpeech: "n.",
        definition: "激活"
    },
    {
        word: "counteract",
        pronunciation: "[ˌkaʊntərˈækt]",
        partOfSpeech: "v.",
        definition: "抵制；抵消；抵抗",
        memoryTip: "counter(对立，制衡)+act(行动)→对着干→抵制",
        isKey: true
    },
    {
        word: "exact",
        pronunciation: "[ɪɡˈzækt]",
        partOfSpeech: "adj.",
        definition: "准确的，精准的",
        partOfSpeech2: "v.",
        definition2: "强迫，强求",
        memoryTip: "ex(过分溢出)+act(做)→强迫→精益求精\n或：ex(前男友)+act(行为)→前男友行为→强求复合"
    },
    {
        word: "exactly",
        pronunciation: "[ɪɡˈzæktli]",
        partOfSpeech: "adv.",
        definition: "准确地；确切地"
    },
    {
        word: "interact",
        pronunciation: "[ˌɪntərˈækt]",
        partOfSpeech: "v.",
        definition: "互动；相互作用",
        memoryTip: "inter(交互)+act(行动)→相互作用"
    },
    {
        word: "interaction",
        pronunciation: "[ˌɪntərˈækʃ(ə)n]",
        partOfSpeech: "n.",
        definition: "互动；反应"
    },
    {
        word: "react",
        pronunciation: "[riˈækt]",
        partOfSpeech: "v.",
        definition: "反应；作出反应",
        memoryTip: "re(往回)+act(行动)→反应"
    },
    {
        word: "reaction",
        pronunciation: "[riˈækʃn]",
        partOfSpeech: "n.",
        definition: "反应",
        memoryTip: "react(反应)+tion(名词后缀)",
        isKey: true
    },
    {
        word: "transaction",
        pronunciation: "[trænˈzækʃn]",
        partOfSpeech: "n.",
        definition: "交易；转账",
        memoryTip: "trans(转移，变形)+act(做)+tion(名词后缀)→交易",
        usage: "online transaction 在线交易，在线转账",
        related: "QR(quick response) Code 二维码"
    },
    {
        word: "payment",
        pronunciation: "[ˈpeɪmənt]",
        partOfSpeech: "n.",
        definition: "收入；付款"
    },
    {
        word: "digit",
        pronunciation: "[ˈdɪdʒɪt]",
        partOfSpeech: "n.",
        definition: "数位，数字",
        memoryTip: "digi(第几)→数位，数字",
        usage: "two-digit inflation 两位数的通货膨胀",
        isKey: true
    },
    {
        word: "digital",
        pronunciation: "[ˈdɪdʒɪtl]",
        partOfSpeech: "adj.",
        definition: "数码的，数字的",
        memoryTip: "digit(数字)+al(的)→数字的",
        usage: "digital era 数字时代"
    },
    {
        word: "digitalize",
        pronunciation: "[ˈdɪdʒɪtəlaɪz]",
        partOfSpeech: "v.",
        definition: "数字化，数码化"
    },
    {
        word: "sum",
        pronunciation: "[sʌm]",
        partOfSpeech: "v.",
        definition: "总计；总结",
        partOfSpeech2: "n.",
        definition2: "总和",
        usage: "a sum of 一笔"
    },
    {
        word: "summary",
        pronunciation: "[ˈsʌməri]",
        partOfSpeech: "n.",
        definition: "总结，概括",
        memoryTip: "summ(加总)+ary(人、事、物名词后缀)→起总括作用的事物",
        usage: "In summary,... 总而言之，……"
    },
    {
        word: "brief",
        pronunciation: "[briːf]",
        partOfSpeech: "adj.",
        definition: "简要的，简洁的",
        partOfSpeech2: "n.",
        definition2: "简报",
        partOfSpeech3: "v.",
        definition3: "做简报"
    },
    {
        word: "summit",
        pronunciation: "[ˈsʌmɪt]",
        partOfSpeech: "n.",
        definition: "峰会；顶点",
        memoryTip: "sum(总结)+mit(meet相遇)→爱总结的大领导聚在一起→峰会",
        usage: "the UN Climate Summit 联合国气候峰会"
    },
    {
        word: "peak",
        pronunciation: "[piːk]",
        partOfSpeech: "n.",
        definition: "顶峰，巅峰",
        partOfSpeech2: "v.",
        definition2: "到达巅峰，到达最高值",
        partOfSpeech3: "adj.",
        definition3: "巅峰的，最高的",
        memoryTip: "电竞比赛中能被pick（选中）的英雄都是当前版本的peak（巅峰）。"
    },
    {
        word: "mode",
        pronunciation: "[məʊd]",
        partOfSpeech: "n.",
        definition: "方式；模式；风度",
        usage: "auto pilot mode 自动驾驶模式"
    },
    {
        word: "style",
        pronunciation: "[staɪl]",
        partOfSpeech: "n.",
        definition: "风格，样式；时髦"
    },
    {
        word: "stylish",
        pronunciation: "[ˈstaɪlɪʃ]",
        partOfSpeech: "adj.",
        definition: "时髦的，时尚的"
    },
    {
        word: "model",
        pronunciation: "[ˈmɒdl]",
        partOfSpeech: "n.",
        definition: "模型；模特",
        partOfSpeech2: "v.",
        definition2: "照着模子做",
        memoryTip: "mode(模式)+l(lady女士)→以亭亭玉立的女士做'模式'→模特"
    },
    {
        word: "remodel",
        pronunciation: "[ˌriːˈmɒdl]",
        partOfSpeech: "v.",
        definition: "改造，重塑",
        memoryTip: "re(重新)+model(做模型)→改造，重塑"
    },
    {
        word: "mimic",
        pronunciation: "[ˈmɪmɪk]",
        partOfSpeech: "v.",
        definition: "模仿"
    },
    {
        word: "modify",
        pronunciation: "[ˈmɒdɪfaɪ]",
        partOfSpeech: "v.",
        definition: "调整；修改",
        memoryTip: "modi(模式)+fy(使动后缀)→使融入当前模式→调整",
        isKey: true
    },
    {
        word: "outmoded",
        pronunciation: "[ˌaʊtˈməʊdɪd]",
        partOfSpeech: "adj.",
        definition: "过时的；陈旧的",
        memoryTip: "out(使out)+mode(模式)+ed(被动)→被排挤出当前的主流模式→过时的"
    },
    {
        word: "outdated",
        pronunciation: "[ˌaʊtˈdeɪtɪd]",
        partOfSpeech: "adj.",
        definition: "过时的"
    },
    {
        word: "old-fashioned",
        pronunciation: "[ˌoʊldˈfæʃnd]",
        partOfSpeech: "adj.",
        definition: "老式的"
    },
    {
        word: "moderate",
        pronunciation: "[ˈmɒdərət]",
        partOfSpeech: "adj.",
        definition: "适度的；合理的；温和的",
        memoryTip: "mode(风度)+rate(速度)→有风度又有速度→适度的",
        isKey: true
    },
    {
        word: "gentle",
        pronunciation: "[ˈdʒentl]",
        partOfSpeech: "adj.",
        definition: "温和的；平缓的"
    },
    {
        word: "mild",
        pronunciation: "[maɪld]",
        partOfSpeech: "adj.",
        definition: "温和的，轻微的",
        memoryTip: "milk（牛奶）的口感很mild（温和的）"
    },
    {
        word: "modest",
        pronunciation: "[ˈmɒdɪst]",
        partOfSpeech: "adj.",
        definition: "谦虚的，低调的",
        memoryTip: "mode(风度)+est(最)→太有风度→谦虚的、低调的"
    },
    {
        word: "low-profile",
        pronunciation: "[ˌloʊˈproʊfaɪl]",
        partOfSpeech: "adj.",
        definition: "低调的，不引人注目的",
        memoryTip: "profile（简历、简介）很low（不怎么样）→低调的，不引人注目的"
    },
    {
        word: "accommodate",
        pronunciation: "[əˈkɒmədeɪt]",
        partOfSpeech: "v.",
        definition: "收容；为……提供食宿→为……提供所需条件",
        memoryTip: "a+commo(come)+date(约会)→啊，来约会吧，我请客→为……提供条件",
        isKey: true
    },
    {
        word: "accommodation",
        pronunciation: "[əˌkɒməˈdeɪʃn]",
        partOfSpeech: "n.",
        definition: "食宿；照顾；迁就"
    },
    {
        word: "appetite",
        pronunciation: "[ˈæpɪtaɪt]",
        partOfSpeech: "n.",
        definition: "食欲，胃口"
    },
    {
        word: "norm",
        pronunciation: "[nɔːm]",
        partOfSpeech: "n.",
        definition: "常态；规范，标准",
        memoryTip: "normal(正常的)=norm(常态)+al(的)",
        isKey: true
    },
    {
        word: "normal",
        pronunciation: "[ˈnɔːml]",
        partOfSpeech: "adj.",
        definition: "正常的，常规的；规范性的"
    },
    {
        word: "abnormal",
        pronunciation: "[æbˈnɔːml]",
        partOfSpeech: "adj.",
        definition: "反常的，异常的",
        memoryTip: "ab(反)+normal(正常的)→反常的"
    },
    {
        word: "enormous",
        pronunciation: "[ɪˈnɔːməs]",
        partOfSpeech: "adj.",
        definition: "巨大的，庞大的",
        memoryTip: "e(溢出，过头)+normous(正常的)→多到不正常"
    },
    {
        word: "giant",
        pronunciation: "[ˈdʒaɪənt]",
        partOfSpeech: "adj.",
        definition: "巨大的",
        partOfSpeech2: "n.",
        definition2: "庞然大物"
    },
    {
        word: "gigantic",
        pronunciation: "[dʒaɪˈɡæntɪk]",
        partOfSpeech: "adj.",
        definition: "巨大的，庞大的"
    },
    {
        word: "mind",
        pronunciation: "[maɪnd]",
        partOfSpeech: "n.",
        definition: "头脑，智力，心",
        partOfSpeech2: "v.",
        definition2: "介意('走心')",
        usage: "state of mind 心态"
    },
    {
        word: "remind",
        pronunciation: "[rɪˈmaɪnd]",
        partOfSpeech: "v.",
        definition: "提醒；使想起",
        memoryTip: "re(重新)+mind(走心)→提醒，使想起",
        usage: "remind sb. of sth. 提醒某人某事",
        isKey: true
    },
    {
        word: "reminder",
        pronunciation: "[rɪˈmaɪndə(r)]",
        partOfSpeech: "n.",
        definition: "提醒物",
        memoryTip: "remind(提醒)+er(起作用的人、事、物)→起到提醒作用的人、事、物"
    },
    {
        word: "recall",
        pronunciation: "[rɪˈkɔːl]",
        partOfSpeech: "v.",
        definition: "使想起；回忆起"
    },
    {
        word: "mental",
        pronunciation: "[ˈmentl]",
        partOfSpeech: "adj.",
        definition: "精神的；智力的",
        memoryTip: "mental=闷头(想)",
        usage: [
            "mental health 精神健康",
            "mental illness 精神疾病"
        ]
    },
    {
        word: "mention",
        pronunciation: "[ˈmenʃn]",
        partOfSpeech: "v.",
        definition: "提及，说到",
        memoryTip: "要过'门神'，先'说'暗号！",
        usage: "not to mention sth. 更别说/更不用说……"
    },
    {
        word: "mentor",
        pronunciation: "[ˈmentɔː(r)]",
        partOfSpeech: "n.",
        definition: "(精神)导师",
        memoryTip: "ment(头脑，精神)+or(人)→精神导师"
    },
    {
        word: "comment",
        pronunciation: "[ˈkɒment]",
        partOfSpeech: "v.",
        definition: "发表评论",
        partOfSpeech2: "n.",
        definition2: "评论",
        usage: [
            "comment on sth. 就……发表评论",
            "no comment 无可奉告"
        ],
        isKey: true
    },
    {
        word: "prompt",
        pronunciation: "[prɒmpt]",
        partOfSpeech: "v.",
        definition: "激发；促使",
        partOfSpeech2: "adj.",
        definition2: "迅速的；及时的(褒)",
        partOfSpeech3: "n.",
        definition3: "提示词",
        memoryTip: "prompt='砰的一声'(出现了紧急事故)\n①激发警惕；②促使人们迅速采取行动",
        usage: "prompt action 及时的行动",
        isKey: true
    },
    {
        word: "phenomenal",
        pronunciation: "[fəˈnɒmɪnl]",
        partOfSpeech: "adj.",
        definition: "现象级的；了不起的",
        memoryTip: "phenomenon(现象)+al(的)→现象级的"
    },
    {
        word: "figure",
        pronunciation: "[ˈfɪɡjər]",
        partOfSpeech: "n.",
        definition: "人物；数字；体型，图形",
        partOfSpeech2: "v.",
        definition2: "计算，认为",
        usage: "figure out 想出来，搞清楚",
        isKey: true
    },
    {
        word: "grave",
        pronunciation: "[ɡreɪv]",
        partOfSpeech: "adj.",
        definition: "严重的，重大的",
        partOfSpeech2: "n.",
        definition2: "坟墓；死亡",
        memoryTip: "坟墓（grave）周围都是乌鸦（raven）",
        isKey: true
    },
    {
        word: "graveyard",
        pronunciation: "[ˈɡreɪvjɑːrd]",
        partOfSpeech: "n.",
        definition: "墓地",
        memoryTip: "grave（坟墓）+yard（院子）→满是坟墓的院子→墓地"
    }
];

const unit2Words = [
    {
        word: "point",
        pronunciation: "[pɔɪnt]",
        partOfSpeech: "v.",
        definition: "指出",
        partOfSpeech2: "n.",
        definition2: "点；重点；意义",
        usage: "point out sth. 指出某事",
        isKey: true
    },
    {
        word: "spot",
        pronunciation: "[spɑːt]",
        partOfSpeech: "n.",
        definition: "点；地点",
        partOfSpeech2: "v.",
        definition2: "看见，发现"
    },
    {
        word: "appoint",
        pronunciation: "[əˈpɔɪnt]",
        partOfSpeech: "v.",
        definition: "指派，任命；安排(时间)",
        memoryTip: "ap(加强)+point(指出)→任命；app+point→在APP里点→安排时间做某事",
        usage: "appoint sb. as sth. 任命某人为……(某职务)"
    },
    {
        word: "name",
        pronunciation: "[neɪm]",
        partOfSpeech: "v.",
        definition: "命名；任命"
    },
    {
        word: "appointment",
        pronunciation: "[əˈpɔɪntmənt]",
        partOfSpeech: "n.",
        definition: "任命；约定会面",
        memoryTip: "appoint(任命)+ment(名词后缀)→任命；做了安排的时间点"
    },
    {
        word: "disappoint",
        pronunciation: "[ˌdɪsəˈpɔɪnt]",
        partOfSpeech: "v.",
        definition: "使(某人)失望",
        memoryTip: "dis(否定)+appoint(任命)→没任命→使失望"
    },
    {
        word: "disappointing",
        pronunciation: "[ˌdɪsəˈpɔɪntɪŋ]",
        partOfSpeech: "adj.",
        definition: "令人失望的"
    },
    {
        word: "disappointed",
        pronunciation: "[ˌdɪsəˈpɔɪntɪd]",
        partOfSpeech: "adj.",
        definition: "失望的"
    },
    {
        word: "disappointment",
        pronunciation: "[ˌdɪsəˈpɔɪntmənt]",
        partOfSpeech: "n.",
        definition: "失望"
    },
    {
        word: "frustrate",
        pronunciation: "[ˈfrʌstreɪt]",
        partOfSpeech: "v.",
        definition: "使沮丧，使挫败"
    },
    {
        word: "frustration",
        pronunciation: "[frʌˈstreɪʃn]",
        partOfSpeech: "n.",
        definition: "沮丧，挫败"
    },
    {
        word: "punch",
        pronunciation: "[pʌntʃ]",
        partOfSpeech: "v.",
        definition: "拳打；打孔",
        partOfSpeech2: "n.",
        definition2: "打拳；打孔器",
        memoryTip: "punch('pangchi'一声)→打人的声音"
    },
    {
        word: "punctuality",
        pronunciation: "[ˌpʌŋktʃuˈæləti]",
        partOfSpeech: "n.",
        definition: "守时",
        memoryTip: "punct(点→时间)+al(形容词)+ity(名词后缀)→准点的能力"
    },
    {
        word: "punctual",
        pronunciation: "[ˈpʌŋktʃuəl]",
        partOfSpeech: "adj.",
        definition: "准点的"
    },
    {
        word: "punctually",
        pronunciation: "[ˈpʌŋktʃuəli]",
        partOfSpeech: "adv.",
        definition: "准点地"
    },
    {
        word: "criticize",
        pronunciation: "[ˈkrɪtɪsaɪz]",
        partOfSpeech: "v.",
        definition: "评价，批评，批判",
        memoryTip: "criti(判断)+cize(size尺码)→对别人的身材评头论足",
        isKey: true
    },
    {
        word: "criticism",
        pronunciation: "[ˈkrɪtɪsɪzəm]",
        partOfSpeech: "n.",
        definition: "批评，指责；(文学)评论"
    },
    {
        word: "critic",
        pronunciation: "[ˈkrɪtɪk]",
        partOfSpeech: "n.",
        definition: "批评家；评论家"
    },
    {
        word: "assess",
        pronunciation: "[əˈses]",
        partOfSpeech: "v.",
        definition: "评估，估算"
    },
    {
        word: "assessment",
        pronunciation: "[əˈsesmənt]",
        partOfSpeech: "n.",
        definition: "评估，估算"
    },
    {
        word: "critical",
        pronunciation: "[ˈkrɪtɪkl]",
        partOfSpeech: "adj.",
        definition: "批评的；至关重要的，紧要的",
        memoryTip: "criti(判断)+al(形容词后缀)→值得判断的问题都是至关重要的问题",
        usage: "be critical to sth. 对……至关重要",
        related: "critical thinking 批判性思维",
        isKey: true
    },
    {
        word: "crucial",
        pronunciation: "[ˈkruːʃl]",
        partOfSpeech: "adj.",
        definition: "至关重要的，关键的"
    },
    {
        word: "criterion",
        pronunciation: "[kraɪˈtɪəriən]",
        partOfSpeech: "n.",
        definition: "评价标准",
        memoryTip: "crit(评价)+er(her)+on(在……的基础上)→在某种评价标准上对她进行评价"
    },
    {
        word: "crisis",
        pronunciation: "[ˈkraɪsɪs]",
        partOfSpeech: "n.",
        definition: "危机",
        memoryTip: "cry(哭)+sis(sister姐妹)→姐妹们一起哭→危机",
        usage: "financial crisis 金融危机"
    },
    {
        word: "hazard",
        pronunciation: "[ˈhæzərd]",
        partOfSpeech: "n.",
        definition: "危险，危害"
    },
    {
        word: "sign",
        pronunciation: "[saɪn]",
        partOfSpeech: "n.",
        definition: "记号，标志；迹象",
        partOfSpeech2: "v.",
        definition2: "签字，签约",
        memoryTip: "唱歌(sing)前要在乐谱上做好记号(sign)",
        isKey: true
    },
    {
        word: "signal",
        pronunciation: "[ˈsɪgnəl]",
        partOfSpeech: "n.",
        definition: "信号",
        partOfSpeech2: "v.",
        definition2: "标志；表明"
    },
    {
        word: "signature",
        pronunciation: "[ˈsɪɡnətʃə(r)]",
        partOfSpeech: "n.",
        definition: "签字，签名",
        memoryTip: "sign(签字)+ature(名词后缀)→签字，签名"
    },
    {
        word: "significant",
        pronunciation: "[sɪɡˈnɪfɪkənt]",
        partOfSpeech: "adj.",
        definition: "重要的，显著的",
        memoryTip: "'死鬼你非看它'→非要看的一定是意义重大的",
        isKey: true
    },
    {
        word: "significantly",
        pronunciation: "[sɪɡˈnɪfɪkəntli]",
        partOfSpeech: "adv.",
        definition: "意义重大地"
    },
    {
        word: "significance",
        pronunciation: "[sɪɡˈnɪfɪkəns]",
        partOfSpeech: "n.",
        definition: "重大意义；重要性"
    },
    {
        word: "monumental",
        pronunciation: "[ˌmɑːnjuˈmentl]",
        partOfSpeech: "adj.",
        definition: "重要的，有纪念意义的",
        memoryTip: "monument（纪念碑）+al（后缀）→纪念碑纪念的都是重要的事"
    },
    {
        word: "assign",
        pronunciation: "[əˈsaɪn]",
        partOfSpeech: "v.",
        definition: "分配，分派",
        memoryTip: "a+sign→一个一个签名→挨个分配\nass+sign→标记屁股的位置→分派就业岗位",
        isKey: true
    },
    {
        word: "assignment",
        pronunciation: "[əˈsaɪnmənt]",
        partOfSpeech: "n.",
        definition: "作业，任务"
    },
    {
        word: "division",
        pronunciation: "[dɪˈvɪʒn]",
        partOfSpeech: "n.",
        definition: "分配；分开；部门",
        memoryTip: "词根divide，意为分割、分开"
    },
    {
        word: "design",
        pronunciation: "[dɪˈzaɪn]",
        partOfSpeech: "v.",
        definition: "设计",
        partOfSpeech2: "n.",
        definition2: "设计",
        memoryTip: "de(deep深入)+sign(签名)→注入灵魂→设计"
    },
    {
        word: "devise",
        pronunciation: "[dɪˈvaɪz]",
        partOfSpeech: "v.",
        definition: "发明，设计",
        memoryTip: "device（设备）是被devise（发明）出来的"
    },
    {
        word: "designate",
        pronunciation: "[ˈdezɪɡneɪt]",
        partOfSpeech: "v.",
        definition: "指定；任命",
        memoryTip: "design(设计)+ate(吃饭)→为了'恰饭'而做的'设计'"
    },
    {
        word: "resign",
        pronunciation: "[rɪˈzaɪn]",
        partOfSpeech: "v.",
        definition: "辞职",
        memoryTip: "re(撤回)+sign(签字)→辞职",
        usage: "resign from 从……辞职"
    },
    {
        word: "resignation",
        pronunciation: "[ˌrezɪɡˈneɪʃn]",
        partOfSpeech: "n.",
        definition: "辞职"
    },
    {
        word: "resignation letter",
        partOfSpeech: "n.",
        definition: "辞职信"
    },
    {
        word: "step down",
        partOfSpeech: "v.",
        definition: "让位，下台"
    },
    {
        word: "mount",
        pronunciation: "[maʊnt]",
        partOfSpeech: "n.",
        definition: "山",
        partOfSpeech2: "v.",
        definition2: "攀登；增加"
    },
    {
        word: "mounting",
        pronunciation: "[ˈmaʊntɪŋ]",
        partOfSpeech: "adj.",
        definition: "上升的，增长的"
    },
    {
        word: "mountain",
        pronunciation: "[ˈmaʊntən]",
        partOfSpeech: "n.",
        definition: "山",
        usage: "a mountain of... 大量的……"
    },
    {
        word: "mountainous",
        pronunciation: "[ˈmaʊntənəs]",
        partOfSpeech: "adj.",
        definition: "巨大的，山一般的"
    },
    {
        word: "paramount",
        pronunciation: "[ˈpærəmaʊnt]",
        partOfSpeech: "adj.",
        definition: "至关重要的；至高无上的",
        memoryTip: "para(平齐，并排)+mount(山)→我与高山肩并肩",
        usage: "be of paramount importance/significance to sb. 对某人至关重要"
    },
    {
        word: "parallel",
        pronunciation: "[ˈpærəlel]",
        partOfSpeech: "adj.",
        definition: "平行的；相似的",
        memoryTip: "para（平齐，并排）+llel（3个l视觉上平行）"
    },
    {
        word: "amount",
        pronunciation: "[əˈmaʊnt]",
        partOfSpeech: "n.",
        definition: "数量，数额",
        partOfSpeech2: "v.",
        definition2: "总计；等同于",
        memoryTip: "a(一个)+mount(山)→一个山，两个山……→数量→总计",
        usage: [
            "a large amount of 大量的……",
            "amount to sth. 等同于……"
        ],
        isKey: true
    },
    {
        word: "dose",
        pronunciation: "[doʊs]",
        partOfSpeech: "n.",
        definition: "剂量，药量；一服（药）",
        memoryTip: "过量服药会把does写成dose"
    },
    {
        word: "use",
        pronunciation: "[juːz]",
        partOfSpeech: "v.",
        definition: "使用，利用",
        pronunciation2: "[juːs]",
        partOfSpeech2: "n.",
        definition2: "使用，利用，作用",
        usage: [
            "used to do 过去常常做某事",
            "be used to do sth. 被用于做某事",
            "be/get used to sth. 适应某事物"
        ]
    },
    {
        word: "usage",
        pronunciation: "[ˈjuːsɪdʒ]",
        partOfSpeech: "n.",
        definition: "使用，利用"
    },
    {
        word: "usual",
        pronunciation: "[ˈjuːʒuəl]",
        partOfSpeech: "adj.",
        definition: "通常的",
        partOfSpeech2: "n.",
        definition2: "惯常的事物",
        memoryTip: "use(使用)+al(的)→一直使用的→通常的",
        usage: "as usual 像平常一样"
    },
    {
        word: "unusual",
        pronunciation: "[ʌnˈjuːʒuəl]",
        partOfSpeech: "adj.",
        definition: "不寻常的；罕见的"
    },
    {
        word: "usually",
        pronunciation: "[ˈjuːʒuəli]",
        partOfSpeech: "adv.",
        definition: "通常地"
    },
    {
        word: "routine",
        pronunciation: "[ruːˈtiːn]",
        partOfSpeech: "adj.",
        definition: "日常的，通常的",
        partOfSpeech2: "n.",
        definition2: "常规，例行公事",
        memoryTip: "词根为route（路线）→每天都走的路线→常规"
    },
    {
        word: "abuse",
        pronunciation: "[əˈbjuːz]",
        partOfSpeech: "v.",
        definition: "滥用",
        pronunciation2: "[əˈbjuːs]",
        partOfSpeech2: "n.",
        definition2: "滥用",
        memoryTip: "ab(反)+use(使用)→不正常的使用→滥用",
        usage: "drug abuse 药物滥用，毒品滥用",
        isKey: true
    },
    {
        word: "misuse",
        pronunciation: "[ˌmɪsˈjuːz]",
        partOfSpeech: "v.",
        definition: "误用；滥用",
        pronunciation2: "[ˌmɪsˈjuːs]",
        partOfSpeech2: "n.",
        definition2: "误用；滥用",
        memoryTip: "mis(错误的)+use(使用)→误用"
    },
    {
        word: "utilize",
        pronunciation: "[ˈjuːtəlaɪz]",
        partOfSpeech: "v.",
        definition: "使用；利用；应用",
        memoryTip: "uti(用)+lize(使……化)→使之可利用化→利用"
    },
    {
        word: "utility",
        pronunciation: "[juːˈtɪləti]",
        partOfSpeech: "n.",
        definition: "效用；实用性；公用事业(水、电、燃气等公共基础设施)",
        memoryTip: "uti(用)+lity(性能)→可用性→可用性最高的就是水、电等基础设施",
        isKey: true
    },
    {
        word: "progress",
        pronunciation: "[prəˈɡres]",
        partOfSpeech: "v.",
        definition: "进步",
        pronunciation2: "[ˈprəʊɡres]",
        partOfSpeech2: "n.",
        definition2: "进步；进程",
        memoryTip: "pro(深入)+gress(行走)→进步，进步的过程",
        usage: "make progress 取得进展",
        isKey: true
    },
    {
        word: "progressive",
        pronunciation: "[prəˈɡresɪv]",
        partOfSpeech: "adj.",
        definition: "进步的；先进的；开明的；稳步发展的"
    },
    {
        word: "course",
        pronunciation: "[kɔːrs]",
        partOfSpeech: "n.",
        definition: "过程，进程；线路，航线；一道菜"
    },
    {
        word: "aggressive",
        pronunciation: "[əˈɡresɪv]",
        partOfSpeech: "adj.",
        definition: "激进的，富于进攻性的，进取的",
        memoryTip: "a(强化)+gress(行走)→激进；冒进",
        isKey: true
    },
    {
        word: "aggressively",
        pronunciation: "[əˈɡresɪvli]",
        partOfSpeech: "adv.",
        definition: "激进地"
    },
    {
        word: "aggression",
        pronunciation: "[əˈɡreʃn]",
        partOfSpeech: "n.",
        definition: "侵犯；侵略；攻击"
    },
    {
        word: "congress",
        pronunciation: "[ˈkɒŋɡres]",
        partOfSpeech: "n.",
        definition: "代表大会",
        memoryTip: "con(一起)+gress(行走)→走到一起→开大会"
    },
    {
        word: "Congress",
        pronunciation: "[ˈkɒŋɡres]",
        partOfSpeech: "n.",
        definition: "国会(美)"
    },
    {
        word: "Parliament",
        pronunciation: "[ˈpɑːləmənt]",
        partOfSpeech: "n.",
        definition: "国会，议会(英)"
    },
    {
        word: "council",
        pronunciation: "[ˈkaʊnsl]",
        partOfSpeech: "n.",
        definition: "市(地方)议会"
    },
    {
        word: "commission",
        pronunciation: "[kəˈmɪʃn]",
        partOfSpeech: "n.",
        definition: "(政府组织的)委员会"
    },
    {
        word: "regret",
        pronunciation: "[rɪˈɡret]",
        partOfSpeech: "v.",
        definition: "后悔；遗憾",
        partOfSpeech2: "n.",
        definition2: "后悔；遗憾",
        memoryTip: "re(往回)+gret(行走)→人生没有回头路与后悔药"
    },
    {
        word: "regrettable",
        pronunciation: "[rɪˈɡretəbl]",
        partOfSpeech: "adj.",
        definition: "令人遗憾的"
    },
    {
        word: "regrettably",
        pronunciation: "[rɪˈɡretəbli]",
        partOfSpeech: "adv.",
        definition: "令人遗憾地"
    },
    {
        word: "remorse",
        pronunciation: "[rɪˈmɔːrs]",
        partOfSpeech: "n.",
        definition: "悔恨，自责"
    },
    {
        word: "reality",
        pronunciation: "[riˈæləti]",
        partOfSpeech: "n.",
        definition: "真实；现实",
        memoryTip: "real(真实的)+lity(名词后缀)→真实；现实",
        related: [
            "VR = virtual reality 虚拟现实",
            "AR = augmented reality 增强现实"
        ]
    },
    {
        word: "realize",
        pronunciation: "[ˈriːəlaɪz;ˈrɪəlaɪz]",
        partOfSpeech: "v.",
        definition: "实现；意识到",
        memoryTip: "real(真实的)+lize(……化)→实现→能被意识到的才是真实的"
    },
    {
        word: "realization",
        pronunciation: "[ˌriːəlaɪˈzeɪʃn;ˌrɪəlaɪˈzeɪʃn]",
        partOfSpeech: "n.",
        definition: "实现"
    },
    {
        word: "absent",
        pronunciation: "[æbˈsent]",
        partOfSpeech: "v.",
        definition: "缺席",
        pronunciation2: "[ˈæbsənt]",
        partOfSpeech2: "adj.",
        definition2: "不在的",
        memoryTip: "ab(否定)+sent(送)=没送过去→缺席的"
    },
    {
        word: "absent-minded",
        pronunciation: "[ˈæbsəntˈmaɪndɪd]",
        partOfSpeech: "adj.",
        definition: "心不在焉的"
    },
    {
        word: "reckless",
        pronunciation: "[ˈrekləs]",
        partOfSpeech: "adj.",
        definition: "莽撞的，不计后果的"
    },
    {
        word: "absence",
        pronunciation: "[ˈæbsəns]",
        partOfSpeech: "n.",
        definition: "缺席；不在；缺乏",
        memoryTip: "absen(缺席)+ce(名词后缀)",
        usage: "in the absence of sth. 在缺乏/没有……的情况下",
        isKey: true
    },
    {
        word: "scarcity",
        pronunciation: "[ˈskersəti]",
        partOfSpeech: "n.",
        definition: "稀缺，缺乏",
        memoryTip: "scar（伤疤）+city（城市）→城里有伤疤的人很稀缺"
    },
    {
        word: "scarcely",
        pronunciation: "[ˈskersli]",
        partOfSpeech: "adv.",
        definition: "几乎不"
    },
    {
        word: "present",
        pronunciation: "[prɪˈzent]",
        partOfSpeech: "v.",
        definition: "出席；呈现",
        partOfSpeech2: "adj.",
        definition2: "当前的",
        partOfSpeech3: "n.",
        definition3: "当前；礼物",
        memoryTip: "pre(提前)+sent(送)=提前送过去→出席的；当前的"
    },
    {
        word: "presence",
        pronunciation: "[ˈprezns]",
        partOfSpeech: "n.",
        definition: "在场，出现；存在",
        memoryTip: "presen(出现)+ce(名词后缀)",
        isKey: true
    },
    {
        word: "represent",
        pronunciation: "[ˌreprɪˈzent]",
        partOfSpeech: "v.",
        definition: "代表；作为……的代言人；相当于",
        memoryTip: "re(重新)+present(出席，呈现)→重新换一种形式出席、呈现→代表",
        isKey: true
    },
    {
        word: "representative",
        pronunciation: "[ˌreprɪˈzentətɪv]",
        partOfSpeech: "adj.",
        definition: "有代表性的",
        partOfSpeech2: "n.",
        definition2: "代表",
        usage: "representative government 代议制政府"
    },
    {
        word: "delegate",
        pronunciation: "[ˈdelɪɡət,ˈdelɪɡeɪt]",
        partOfSpeech: "n.",
        definition: "代表",
        partOfSpeech2: "v.",
        definition2: "授权，委托",
        memoryTip: "谐音'代理给他'"
    },
    {
        word: "favor",
        pronunciation: "[ˈfeɪvə(r)]",
        partOfSpeech: "v.",
        definition: "喜爱；偏爱；有利于",
        partOfSpeech2: "n.",
        definition2: "喜爱；偏爱；善事",
        memoryTip: "喜欢(favor)到成为'发烧友'(fever)的程度",
        usage: "in favor of 出于对……的喜爱",
        isKey: true
    },
    {
        word: "favorite",
        pronunciation: "[ˈfeɪvərɪt]",
        partOfSpeech: "adj.",
        definition: "最喜爱的",
        partOfSpeech2: "n.",
        definition2: "喜爱的东西"
    },
    {
        word: "favorable",
        pronunciation: "[ˈfeɪvərəbl]",
        partOfSpeech: "adj.",
        definition: "讨人喜欢的，有利的"
    },
    {
        word: "unfavorable",
        pronunciation: "[ʌnˈfeɪvərəbl]",
        partOfSpeech: "adj.",
        definition: "不讨人喜欢的，有害的"
    },
    {
        word: "pattern",
        pronunciation: "[ˈpætn]",
        partOfSpeech: "n.",
        definition: "模式；范例；榜样",
        memoryTip: "父亲(pater)就是孩子的榜样(pattern)"
    },
    {
        word: "paternal",
        pronunciation: "[pəˈtɜːnl]",
        partOfSpeech: "adj.",
        definition: "父系的，父亲的"
    },
    {
        word: "maternal",
        pronunciation: "[məˈtɜːnl]",
        partOfSpeech: "adj.",
        definition: "母系的，母亲的"
    },
    {
        word: "patriot",
        pronunciation: "[ˈpeɪtriət;ˈpætriət]",
        partOfSpeech: "n.",
        definition: "爱国者"
    },
    {
        word: "patriotism",
        pronunciation: "[ˈpeɪtriətɪzəm;ˈpætriətɪzəm]",
        partOfSpeech: "n.",
        definition: "爱国主义"
    },
    {
        word: "deliver",
        pronunciation: "[dɪˈlɪvə(r)]",
        partOfSpeech: "v.",
        definition: "递送；传递；兑现(交付)",
        memoryTip: "de(递过去)+liver(肝脏)→用'肝'兑现某物"
    },
    {
        word: "delivery",
        pronunciation: "[dɪˈlɪvəri]",
        partOfSpeech: "n.",
        definition: "递送",
        usage: "express delivery 快递"
    },
    {
        word: "shipment",
        pronunciation: "[ˈʃɪpmənt]",
        partOfSpeech: "n.",
        definition: "运送，运输"
    },
    {
        word: "crush",
        pronunciation: "[krʌʃ]",
        partOfSpeech: "v.",
        definition: "碾压，压垮",
        partOfSpeech2: "n.",
        definition2: "破坏，毁坏",
        memoryTip: "car+rush（快速冲过）→被快速冲过的车碾压压坏",
        related: [
            "car crush n. 车祸",
            "air crush n. 飞机失事"
        ],
        isKey: true
    },
    {
        word: "crack",
        pronunciation: "[kræk]",
        partOfSpeech: "v.",
        definition: "使断裂，使破裂；打败"
    },
    {
        word: "split",
        pronunciation: "[splɪt]",
        partOfSpeech: "v.",
        definition: "使分裂，使裂开"
    }
];
const unit3Words = [
    {
        word: "capture",
        pronunciation: "[ˈkæptʃə(r)]",
        partOfSpeech: "v.",
        definition: "抓住，捕捉",
        partOfSpeech2: "n.",
        definition2: "抓住，捕捉"
    },
    {
        word: "captain",
        pronunciation: "[ˈkæptɪn]",
        partOfSpeech: "n.",
        definition: "首领；队长"
    },
    {
        word: "arrest",
        pronunciation: "[əˈrest]",
        partOfSpeech: "v.",
        definition: "逮捕，拘留",
        memoryTip: "a（否定前缀）+rest（休息）→被逮捕就不能休息了"
    },
    {
        word: "capable",
        pronunciation: "[ˈkeɪpəbl]",
        partOfSpeech: "adj.",
        definition: "有能力的；足以胜任的",
        memoryTip: "cap(抓)+able(能……的)→能抓住机会的→有能力的",
        usage: "be capable of... 有能力做……"
    },
    {
        word: "capability",
        pronunciation: "[ˌkeɪpəˈbɪləti]",
        partOfSpeech: "n.",
        definition: "能力"
    },
    {
        word: "capacity",
        pronunciation: "[kəˈpæsəti]",
        partOfSpeech: "n.",
        definition: "容量"
    },
    {
        word: "accept",
        pronunciation: "[əkˈsept]",
        partOfSpeech: "v.",
        definition: "接受；认可",
        memoryTip: "ac(强化)+cept(拿)→接受",
        usage: "be accepted as 被作为……而接受"
    },
    {
        word: "acceptance",
        pronunciation: "[əkˈseptəns]",
        partOfSpeech: "n.",
        definition: "接受"
    },
    {
        word: "acknowledge",
        pronunciation: "[əkˈnɑːlɪdʒ]",
        partOfSpeech: "v.",
        definition: "承认"
    },
    {
        word: "tolerate",
        pronunciation: "[ˈtɑːləreɪt]",
        partOfSpeech: "v.",
        definition: "忍耐；容忍，允许",
        memoryTip: "toler（近似toilet厕所）+ate（吃）→在厕所里吃饭，需要忍耐！"
    },
    {
        word: "acceptable",
        pronunciation: "[əkˈseptəbl]",
        partOfSpeech: "adj.",
        definition: "可接受的；认同的",
        memoryTip: "accept(接受)+able(可以……的)→可接受的"
    },
    {
        word: "unacceptable",
        pronunciation: "[ˌʌnəkˈseptəbl]",
        partOfSpeech: "adj.",
        definition: "不可接受的"
    },
    {
        word: "unbearable",
        pronunciation: "[ʌnˈberəbl]",
        partOfSpeech: "adj.",
        definition: "不可承受的；不可忍受的",
        memoryTip: "un（否定前缀）+bear（承担）+able（后缀）"
    },
    {
        word: "conceive",
        pronunciation: "[kənˈsiːv]",
        partOfSpeech: "v.",
        definition: "想象，构想，设想；怀孕",
        memoryTip: "con(一起)+ceive(收)→凝聚在一起→构建具体概念",
        usage: "conceive of sth. 构想/设想……",
        isKey: true
    },
    {
        word: "pregnant",
        pronunciation: "[ˈpreɡnənt]",
        partOfSpeech: "adj.",
        definition: "怀孕的"
    },
    {
        word: "concept",
        pronunciation: "[ˈkɒnsept]",
        partOfSpeech: "n.",
        definition: "概念",
        memoryTip: "构想(conceive)出来的就是概念(concept)"
    },
    {
        word: "conception",
        pronunciation: "[kənˈsepʃn]",
        partOfSpeech: "n.",
        definition: "概念"
    },
    {
        word: "except",
        pronunciation: "[ɪkˈsept]",
        partOfSpeech: "v.",
        definition: "把……排除在外",
        partOfSpeech2: "prep.",
        definition2: "除了……",
        memoryTip: "ex(向外)+cept(收)→拒收→把……排除在外",
        usage: "nothing except... 除了……什么都没有(只有)"
    },
    {
        word: "save",
        pronunciation: "[seɪv]",
        partOfSpeech: "v.",
        definition: "保存；避免",
        partOfSpeech2: "prep.",
        definition2: "除了"
    },
    {
        word: "exception",
        pronunciation: "[ɪkˈsepʃn]",
        partOfSpeech: "n.",
        definition: "例外",
        memoryTip: "except(把……排除在外)+tion(名词后缀)→例外",
        usage: "without exception 无一例外",
        isKey: true
    },
    {
        word: "deceive",
        pronunciation: "[dɪˈsiːv]",
        partOfSpeech: "v.",
        definition: "欺骗，刻意误导",
        memoryTip: "de(否定)+ceive(收)→否定但接收→表里不一→欺骗"
    },
    {
        word: "deceptive",
        pronunciation: "[dɪˈseptɪv]",
        partOfSpeech: "adj.",
        definition: "欺骗性的；误导性的"
    },
    {
        word: "deception",
        pronunciation: "[dɪˈsepʃn]",
        partOfSpeech: "n.",
        definition: "欺骗；误导"
    },
    {
        word: "cheat",
        pronunciation: "[tʃiːt]",
        partOfSpeech: "v.",
        definition: "作弊，欺骗；出轨"
    },
    {
        word: "perceive",
        pronunciation: "[pəˈsiːv]",
        partOfSpeech: "v.",
        definition: "意识到，感知到",
        memoryTip: "per(贯穿、穿透)+ceive(收)→理解通透→意识到，感知到",
        usage: "perceive A as B 把A当作B",
        isKey: true
    },
    {
        word: "perception",
        pronunciation: "[pəˈsepʃn]",
        partOfSpeech: "n.",
        definition: "感知；认知；见解"
    },
    {
        word: "deem",
        pronunciation: "[diːm]",
        partOfSpeech: "v.",
        definition: "认为，视为"
    },
    {
        word: "receive",
        pronunciation: "[rɪˈsiːv]",
        partOfSpeech: "v.",
        definition: "接收，收到",
        memoryTip: "re(往回)+ceive(收)→回收→收到"
    },
    {
        word: "reception",
        pronunciation: "[rɪˈsepʃn]",
        partOfSpeech: "n.",
        definition: "接收；接待；接待处"
    },
    {
        word: "recipient",
        pronunciation: "[rɪˈsɪpiənt]",
        partOfSpeech: "n.",
        definition: "接收者；接受者",
        memoryTip: "recip(接收)+ient(人)→接收者"
    },
    {
        word: "receipt",
        pronunciation: "[rɪˈsiːt]",
        partOfSpeech: "n.",
        definition: "收据；小票",
        memoryTip: "简化版的reception→简易收据；receive+it→'recit'"
    },
    {
        word: "recipe",
        pronunciation: "[ˈresəpi]",
        partOfSpeech: "n.",
        definition: "配方，食谱；方法，诀窍",
        memoryTip: "结尾的发音是pea(豌豆)，和食物有关"
    },
    {
        word: "note",
        pronunciation: "[nəʊt]",
        partOfSpeech: "v.",
        definition: "注意；指出，提到",
        partOfSpeech2: "n.",
        definition2: "笔记；提示"
    },
    {
        word: "notable",
        pronunciation: "[ˈnoʊtəbl]",
        partOfSpeech: "adj.",
        definition: "值得注意的"
    },
    {
        word: "noteworthy",
        pronunciation: "[ˈnoʊtwɜːrði]",
        partOfSpeech: "adj.",
        definition: "值得注意的；重要的"
    },
    {
        word: "notice",
        pronunciation: "[ˈnəʊtɪs]",
        partOfSpeech: "v.",
        definition: "注意到",
        partOfSpeech2: "n.",
        definition2: "提醒；通知，公告，告示牌",
        memoryTip: "note(注意)+ice(冰)→注意路上有冰→提醒；告示牌",
        usage: "without notice 在没有事先通知的情况下"
    },
    {
        word: "notify",
        pronunciation: "[ˈnəʊtɪfaɪ]",
        partOfSpeech: "v.",
        definition: "通知(正式)"
    },
    {
        word: "notion",
        pronunciation: "[ˈnəʊʃn]",
        partOfSpeech: "n.",
        definition: "观念；理念；见解",
        memoryTip: "no(没有)+tion('神')→无神论→观念",
        isKey: true
    },
    {
        word: "conviction",
        pronunciation: "[kənˈvɪkʃn]",
        partOfSpeech: "n.",
        definition: "坚信；定罪",
        memoryTip: "con（一起）+vict（胜利）→要坚信团结在一起就能胜利"
    },
    {
        word: "notorious",
        pronunciation: "[nəʊˈtɔːriəs]",
        partOfSpeech: "adj.",
        definition: "臭名昭著的；声名狼藉的",
        memoryTip: "no(没有)+torious(发音接近tourist游客)→因为臭名昭著，所以没有游客"
    },
    {
        word: "full",
        pronunciation: "[fʊl]",
        partOfSpeech: "adj.",
        definition: "充满的；完全的",
        usage: "be full of sth. 满是……"
    },
    {
        word: "fill",
        pronunciation: "[fɪl]",
        partOfSpeech: "v.",
        definition: "使充满；使填满",
        usage: "fill A with B 用B填满A"
    },
    {
        word: "fulfill",
        pronunciation: "[fʊlˈfɪl]",
        partOfSpeech: "v.",
        definition: "履行；兑现；执行；做到",
        memoryTip: "full+fill→完全填满→履行诺言"
    },
    {
        word: "fulfillment",
        pronunciation: "[fʊlˈfɪlmənt]",
        partOfSpeech: "n.",
        definition: "完成，满足，完满；满足感，成就感，充实感",
        usage: "sense of fulfillment 成就感"
    },
    {
        word: "indulge",
        pronunciation: "[ɪnˈdʌldʒ]",
        partOfSpeech: "v.",
        definition: "放纵，沉溺"
    },
    {
        word: "indulgent",
        pronunciation: "[ɪnˈdʌldʒənt]",
        partOfSpeech: "adj.",
        definition: "纵容的"
    },
    {
        word: "major",
        pronunciation: "[ˈmeɪdʒə(r)]",
        partOfSpeech: "adj.",
        definition: "主要的",
        partOfSpeech2: "n.",
        definition2: "专业；少校",
        partOfSpeech3: "v.",
        definition3: "主修……，主攻……",
        usage: "major in 主攻，主修(某个领域)"
    },
    {
        word: "minor",
        pronunciation: "[ˈmaɪnə(r)]",
        partOfSpeech: "adj.",
        definition: "少数的",
        partOfSpeech2: "n.",
        definition2: "辅修科目",
        partOfSpeech3: "v.",
        definition3: "辅修……"
    },
    {
        word: "majority",
        pronunciation: "[məˈdʒɒrəti]",
        partOfSpeech: "n.",
        definition: "大多数；占多数者",
        memoryTip: "major(主要的)+rate(比率)→比例是占主要的那部分",
        usage: "a majority of sth. 大多数的……",
        isKey: true
    },
    {
        word: "minority",
        pronunciation: "[maɪˈnɒrəti]",
        partOfSpeech: "n.",
        definition: "少数派；占少数者"
    },
    {
        word: "bulk",
        pronunciation: "[bʌlk]",
        partOfSpeech: "n.",
        definition: "大体积，大量；大部分",
        memoryTip: "绿巨人浩克（Hulk）的体积很大（bulk）"
    },
    {
        word: "majestic",
        pronunciation: "[məˈdʒestɪk]",
        partOfSpeech: "adj.",
        definition: "雄伟的，壮观的；威严的",
        memoryTip: "maj(伟大)+estic(的)→伟大的"
    },
    {
        word: "majesty",
        pronunciation: "[ˈmædʒəsti]",
        partOfSpeech: "n.",
        definition: "庄严，威严；(国王)陛下"
    },
    {
        word: "mayor",
        pronunciation: "[meə(r)]",
        partOfSpeech: "n.",
        definition: "市长",
        memoryTip: "may(maj伟大)+or(人)→(古代)伟大的人→市长"
    },
    {
        word: "governor",
        pronunciation: "[ˈɡʌvərnər]",
        partOfSpeech: "n.",
        definition: "州长；统治者",
        memoryTip: "govern（统治）+or（人事物后缀）→统治的人"
    },
    {
        word: "magic",
        pronunciation: "[ˈmædʒɪk]",
        partOfSpeech: "n.",
        definition: "魔法",
        partOfSpeech2: "adj.",
        definition2: "神奇的，有魔力的",
        memoryTip: "mag(伟大)+ic(的)→魔法",
        usage: "magic cure/magic potion/magic formula 灵丹妙药/秘方"
    },
    {
        word: "magical",
        pronunciation: "[ˈmædʒɪkl]",
        partOfSpeech: "adj.",
        definition: "神奇的，奇妙的"
    },
    {
        word: "magically",
        pronunciation: "[ˈmædʒɪkli]",
        partOfSpeech: "adv.",
        definition: "神奇地，奇妙地"
    },
    {
        word: "spell",
        pronunciation: "[spel]",
        partOfSpeech: "n.",
        definition: "咒语；一段时间",
        partOfSpeech2: "v.",
        definition2: "拼写，拼出",
        memoryTip: "用字母拼出的咒语效果持续了一段时间"
    },
    {
        word: "magnify",
        pronunciation: "[ˈmæɡnɪfaɪ]",
        partOfSpeech: "v.",
        definition: "放大；增强",
        memoryTip: "magni(巨大)+fy(使动)→放大"
    },
    {
        word: "magnificent",
        pronunciation: "[mæɡˈnɪfɪsnt]",
        partOfSpeech: "adj.",
        definition: "雄伟的，壮丽的，极好的"
    },
    {
        word: "magnificence",
        pronunciation: "[mæɡˈnɪfɪsns]",
        partOfSpeech: "n.",
        definition: "华丽；富丽堂皇"
    },
    {
        word: "magnitude",
        pronunciation: "[ˈmæɡnɪtjuːd]",
        partOfSpeech: "n.",
        definition: "巨大，重大，重要性；震级",
        memoryTip: "magni(巨大)+tude(情况)→巨大，重要性"
    },
    {
        word: "cover",
        pronunciation: "[ˈkʌvə(r)]",
        partOfSpeech: "v.",
        definition: "覆盖，遮盖，遮掩",
        partOfSpeech2: "n.",
        definition2: "遮盖物，封面",
        usage: "cover story 封面故事",
        isKey: true
    },
    {
        word: "shelter",
        pronunciation: "[ˈʃeltər]",
        partOfSpeech: "v.",
        definition: "保护，庇护",
        partOfSpeech2: "n.",
        definition2: "庇护所；住处"
    },
    {
        word: "conceal",
        pronunciation: "[kənˈsiːl]",
        partOfSpeech: "v.",
        definition: "隐藏，掩盖"
    },
    {
        word: "coverage",
        pronunciation: "[ˈkʌvərɪdʒ]",
        partOfSpeech: "n.",
        definition: "覆盖面；覆盖范围；新闻报道(范围)",
        memoryTip: "cover(覆盖)+age(年龄)→可覆盖的年龄段→覆盖面，覆盖范围"
    },
    {
        word: "discover",
        pronunciation: "[dɪˈskʌvə(r)]",
        partOfSpeech: "v.",
        definition: "探索；发现",
        memoryTip: "dis(否定)+cover(遮盖)→掀起你的盖头来→探索；发现"
    },
    {
        word: "discovery",
        pronunciation: "[dɪˈskʌvəri]",
        partOfSpeech: "n.",
        definition: "探索；发现"
    },
    {
        word: "uncover",
        pronunciation: "[ʌnˈkʌvə(r)]",
        partOfSpeech: "v.",
        definition: "揭发；揭露"
    },
    {
        word: "detect",
        pronunciation: "[dɪˈtekt]",
        partOfSpeech: "v.",
        definition: "发现，查明，探测到"
    },
    {
        word: "recover",
        pronunciation: "[rɪˈkʌvə(r)]",
        partOfSpeech: "v.",
        definition: "康复；恢复",
        memoryTip: "re(重新)+cover(覆盖)→植被重新覆盖了地表→生态恢复了",
        usage: "recover from sth. 从……康复/恢复"
    },
    {
        word: "recovery",
        pronunciation: "[rɪˈkʌvəri]",
        partOfSpeech: "n.",
        definition: "复原"
    },
    {
        word: "restore",
        pronunciation: "[rɪˈstɔːr]",
        partOfSpeech: "v.",
        definition: "恢复"
    },
    {
        word: "catalog/catalogue",
        pronunciation: "[ˈkætəlɒɡ]",
        partOfSpeech: "n.",
        definition: "目录",
        partOfSpeech2: "v.",
        definition2: "分门别类记录",
        memoryTip: "cata(向下)+log(日志、记录)→向下展开的目录"
    },
    {
        word: "category",
        pronunciation: "[ˈkætəɡəri]",
        partOfSpeech: "n.",
        definition: "类型，种类"
    },
    {
        word: "catalyst",
        pronunciation: "[ˈkætəlɪst]",
        partOfSpeech: "n.",
        definition: "催化剂",
        memoryTip: "cata(向下)+list(列)→向下列→催化反应"
    },
    {
        word: "catastrophe",
        pronunciation: "[kəˈtæstrəfi]",
        partOfSpeech: "n.",
        definition: "灾难",
        memoryTip: "cata(向下)+strophe(死兆飞)→天灾"
    },
    {
        word: "disaster",
        pronunciation: "[dɪˈzæstər]",
        partOfSpeech: "n.",
        definition: "灾难",
        memoryTip: "dis（否定）+aster（星星）→星星没了→灾难"
    },
    {
        word: "tragedy",
        pronunciation: "[ˈtrædʒədi]",
        partOfSpeech: "n.",
        definition: "悲剧；惨剧"
    },
    {
        word: "tragic",
        pronunciation: "[ˈtrædʒɪk]",
        partOfSpeech: "adj.",
        definition: "悲惨的"
    },
    {
        word: "ample",
        pronunciation: "[ˈæmpl]",
        partOfSpeech: "adj.",
        definition: "富裕的；充足的；丰满的",
        memoryTip: "apple is ample 苹果很丰满"
    },
    {
        word: "sufficient",
        pronunciation: "[səˈfɪʃnt]",
        partOfSpeech: "adj.",
        definition: "足够的，充分的"
    },
    {
        word: "insufficient",
        pronunciation: "[ˌɪnsəˈfɪʃnt]",
        partOfSpeech: "adj.",
        definition: "不够的，不充分的"
    },
    {
        word: "amplify",
        pronunciation: "[ˈæmplɪfaɪ]",
        partOfSpeech: "v.",
        definition: "放大；增强",
        memoryTip: "ampl(丰满)+ify(使动后缀)→使放大、增强"
    },
    {
        word: "amplifier",
        pronunciation: "[ˈæmplɪfaɪə(r)]",
        partOfSpeech: "n.",
        definition: "放大器；扬声器"
    },
    {
        word: "example",
        pronunciation: "[ɪɡˈzɑːmpl]",
        partOfSpeech: "n.",
        definition: "例子；典型；模范",
        memoryTip: "ex(向外)+ample(硕大)→从硕大的样本里拿一个出来"
    },
    {
        word: "exemplify",
        pronunciation: "[ɪɡˈzemplɪfaɪ]",
        partOfSpeech: "v.",
        definition: "(举例)例证；是……的典型例子",
        memoryTip: "exampl(例子)+lify(使动)→例证",
        isKey: true
    },
    {
        word: "sample",
        pronunciation: "[ˈsɑːmpl]",
        partOfSpeech: "n.",
        definition: "样本；样品",
        partOfSpeech2: "v.",
        definition2: "取样",
        memoryTip: "s(撕)+ample(硕大)→从硕大的本体上撕下一片→样本",
        usage: "blood sample 血样"
    },
    {
        word: "exempt",
        pronunciation: "[ɪɡˈzempt]",
        partOfSpeech: "v.",
        definition: "免除；豁免",
        partOfSpeech2: "adj.",
        definition2: "豁免的",
        memoryTip: "ex(向外)+emp(大样本)+t(踢)→从大样本中踢出来",
        usage: "be exempt from... 从……中豁免"
    },
    {
        word: "exemption",
        pronunciation: "[ɪɡˈzempʃn]",
        partOfSpeech: "n.",
        definition: "豁免；免除，免税(钱)"
    },
    {
        word: "part",
        pronunciation: "[paːt]",
        partOfSpeech: "n.",
        definition: "部分",
        partOfSpeech2: "v.",
        definition2: "分开"
    },
    {
        word: "party",
        pronunciation: "[ˈpɑːti]",
        partOfSpeech: "n.",
        definition: "聚会，派对；组，对；政党"
    },
    {
        word: "partner",
        pronunciation: "[ˈpɑːtnə(r)]",
        partOfSpeech: "n.",
        definition: "伙伴；合伙人",
        memoryTip: "partn(部分)+er(人、事、物后缀)→合伙人"
    },
    {
        word: "partnership",
        pronunciation: "[ˈpɑːtnəʃɪp]",
        partOfSpeech: "n.",
        definition: "合作关系；合伙人关系",
        memoryTip: "partner(合伙人)+ship(关系后缀)→合伙关系"
    },
    {
        word: "partial",
        pronunciation: "[ˈpaːʃl]",
        partOfSpeech: "adj.",
        definition: "部分的；偏爱的，偏心的",
        memoryTip: "任凭弱水三千，我只取一瓢饮→偏爱的，偏心的",
        usage: "be partial to sth. 偏爱……",
        isKey: true
    },
    {
        word: "impartial",
        pronunciation: "[ɪmˈpɑːʃl]",
        partOfSpeech: "adj.",
        definition: "不偏不倚的；公正的"
    },
    {
        word: "neutral",
        pronunciation: "[ˈnuːtrəl]",
        partOfSpeech: "adj.",
        definition: "中立的，中性的"
    },
    {
        word: "apart",
        pronunciation: "[əˈpaːt]",
        partOfSpeech: "adj.",
        definition: "分开的；分离的",
        memoryTip: "a(强化)+part(分开)→分开的",
        usage: [
            "apart from 除了；除……之外≈except for",
            "fall apart 崩溃，土崩瓦解"
        ],
        isKey: true
    },
    {
        word: "apartment",
        pronunciation: "[əˈpaːtmənt]",
        partOfSpeech: "n.",
        definition: "公寓；房间",
        memoryTip: "a(加强)+part(分开)+ment(名词)→一个个分开的公寓"
    },
    {
        word: "depart",
        pronunciation: "[dɪˈpɑːt]",
        partOfSpeech: "v.",
        definition: "离开，出发；分离",
        memoryTip: "de(加强)+part(分开)→离开，出发",
        usage: "depart from sth. 离开……",
        isKey: true
    },
    {
        word: "departure",
        pronunciation: "[dɪˈpɑːtʃə(r)]",
        partOfSpeech: "n.",
        definition: "离开；出发"
    },
    {
        word: "arrival",
        pronunciation: "[əˈraɪvl]",
        partOfSpeech: "n.",
        definition: "抵达，到达，到来"
    },
    {
        word: "department",
        pronunciation: "[dɪˈpɑːtmənt]",
        partOfSpeech: "n.",
        definition: "部门；局(分支机构)",
        memoryTip: "depart(分离)+ment(门)→部门",
        usage: [
            "department store 百货公司；百货商店",
            "Department of Justice = DOJ = 司法部(美)"
        ]
    },
    {
        word: "particular",
        pronunciation: "[pəˈtɪkjələ(r)]",
        partOfSpeech: "adj.",
        definition: "不寻常的；特别的；挑剔的",
        partOfSpeech2: "n.",
        definition2: "细节，详情",
        memoryTip: "parti(派对)+killer(杀手)→挑剔的人是派对杀手",
        usage: "in particular 特别地，格外地"
    },
    {
        word: "particularly",
        pronunciation: "[pəˈtɪkjələli]",
        partOfSpeech: "adv.",
        definition: "特别，尤其"
    },
    {
        word: "peculiar",
        pronunciation: "[pɪˈkjuːliər]",
        partOfSpeech: "adj.",
        definition: "特殊的，怪异的"
    },
    {
        word: "participate",
        pronunciation: "[pɑːˈtɪsɪpeɪt]",
        partOfSpeech: "v.",
        definition: "参与",
        memoryTip: "parti(派对)+cip(sip小口喝)+ate(吃)→在派对上吃喝→参与",
        usage: "participate in sth. 参与某事"
    },
    {
        word: "participation",
        pronunciation: "[pɑːˌtɪsɪˈpeɪʃn]",
        partOfSpeech: "n.",
        definition: "参与"
    },
    {
        word: "participant",
        pronunciation: "[pɑːˈtɪsɪpənt]",
        partOfSpeech: "n.",
        definition: "参与者",
        memoryTip: "particip(参与)+ant(人)→参与的人"
    },
    {
        word: "issue",
        pronunciation: "[ˈɪʃuː;ˈɪsjuː]",
        partOfSpeech: "n.",
        definition: "事项；议题；问题",
        partOfSpeech2: "v.",
        definition2: "(官方)发表，发布",
        memoryTip: "'遗书'→问题，发布，事项",
        isKey: true
    },
    {
        word: "tissue",
        pronunciation: "[ˈtɪʃuː]",
        partOfSpeech: "n.",
        definition: "纸巾；（细胞的）组织",
        memoryTip: "遇到问题（issue）就得用纸巾（tissue）擦眼泪"
    },
    {
        word: "cope",
        pronunciation: "[kəʊp]",
        partOfSpeech: "v.",
        definition: "处理，对付(问题)",
        memoryTip: "cop(警察)就是来处理问题的",
        usage: "cope with sth. 处理/应对某事",
        isKey: true
    },
    {
        word: "deem",
        pronunciation: "[diːm]",
        partOfSpeech: "v.",
        definition: "认为，视为，相信",
        memoryTip: "看到（seem）就会相信（deem）",
        isKey: true
    },
    {
        word: "reckon",
        pronunciation: "[ˈrekən]",
        partOfSpeech: "v.",
        definition: "认为；估计"
    },
    {
        word: "market",
        pronunciation: "[ˈmɑːkɪt]",
        partOfSpeech: "n.",
        definition: "市场",
        partOfSpeech2: "v.",
        definition2: "推销；促销"
    },
    {
        word: "marketing",
        pronunciation: "[ˈmɑːkɪtɪŋ]",
        partOfSpeech: "n.",
        definition: "市场营销"
    },
    {
        word: "fair",
        pronunciation: "[fer]",
        partOfSpeech: "n.",
        definition: "集市，展销会",
        partOfSpeech2: "adj.",
        definition2: "公平的"
    },
    {
        word: "fairly",
        pronunciation: "[ˈferli]",
        partOfSpeech: "adj.",
        definition: "公平的；相当的"
    },
    {
        word: "commodity",
        pronunciation: "[kəˈmɑːdəti]",
        partOfSpeech: "n.",
        definition: "商品；有用的东西"
    }
];
const unit4Words = [
    {
        word: "merge",
        pronunciation: "[mɜːdʒ]",
        partOfSpeech: "v.",
        definition: "合并；融入",
        memoryTip: "'没之'→吞没之→合并，融入",
        isKey: true
    },
    {
        word: "merger",
        pronunciation: "[ˈmɜːdʒə(r)]",
        partOfSpeech: "n.",
        definition: "合并；并购(企业)",
        memoryTip: "merge(合并)+er(起相关作用的人、物)→并购行为"
    },
    {
        word: "emerge",
        pronunciation: "[iˈmɜːdʒ]",
        partOfSpeech: "v.",
        definition: "浮现，露出；崭露(头角)",
        memoryTip: "e(向外)+merge(吞没)→从水面上浮现、露出",
        isKey: true
    },
    {
        word: "emerging",
        pronunciation: "[ɪˈmɜːdʒɪŋ]",
        partOfSpeech: "adj.",
        definition: "新兴的；刚刚崛起的"
    },
    {
        word: "emergence",
        pronunciation: "[ɪˈmɜːdʒəns]",
        partOfSpeech: "n.",
        definition: "出现"
    },
    {
        word: "emergency",
        pronunciation: "[iˈmɜːdʒənsi]",
        partOfSpeech: "n.",
        definition: "突发事件；紧急情况",
        memoryTip: "emerge(出现)+urgency(紧急)→紧急情况"
    },
    {
        word: "immerse",
        pronunciation: "[ɪˈmɜːs]",
        partOfSpeech: "v.",
        definition: "使沉浸在",
        memoryTip: "im(进入)+merse(吞没)→沉浸其中"
    },
    {
        word: "immersive",
        pronunciation: "[ɪˈmɜːsɪv]",
        partOfSpeech: "adj.",
        definition: "沉浸的；沉浸式的",
        usage: "immersive experience 沉浸式体验"
    },
    {
        word: "soak",
        pronunciation: "[soʊk]",
        partOfSpeech: "v.",
        definition: "浸泡，浸湿",
        memoryTip: "打香皂（soap）前要先把手浸湿（soak）"
    },
    {
        word: "eject",
        pronunciation: "[iˈdʒekt]",
        partOfSpeech: "v.",
        definition: "弹出；驱赶，逐出",
        memoryTip: "e(向外)+ject(投掷)→弹出，驱逐出"
    },
    {
        word: "rebound",
        pronunciation: "[rɪˈbaʊnd,ˈriːbaʊnd]",
        partOfSpeech: "v.",
        definition: "反弹，回升"
    },
    {
        word: "inject",
        pronunciation: "[ɪnˈdʒekt]",
        partOfSpeech: "v.",
        definition: "注射；注入",
        memoryTip: "in(向内)+ject(投射)→注射；注入",
        isKey: true
    },
    {
        word: "injection",
        pronunciation: "[ɪnˈdʒekʃn]",
        partOfSpeech: "n.",
        definition: "注射；注入"
    },
    {
        word: "project",
        pronunciation: "[ˈprɒdʒekt]",
        partOfSpeech: "n.",
        definition: "方案，项目，计划",
        pronunciation2: "[prəˈdʒekt]",
        partOfSpeech2: "v.",
        definition2: "投射",
        memoryTip: "pro(深入)+ject(投掷)→投射；需要深入做的大方案、大项目"
    },
    {
        word: "programme",
        pronunciation: "[ˈproʊɡræm]",
        partOfSpeech: "n.",
        definition: "方案，计划；程序",
        partOfSpeech2: "v.",
        definition2: "编程"
    },
    {
        word: "reject",
        pronunciation: "[rɪˈdʒekt]",
        partOfSpeech: "v.",
        definition: "拒绝接受，拒绝接收，拒绝",
        memoryTip: "re(相反)+ject(投掷)→扔回去→拒绝",
        isKey: true
    },
    {
        word: "rejection",
        pronunciation: "[rɪˈdʒekʃn]",
        partOfSpeech: "n.",
        definition: "拒绝"
    },
    {
        word: "denial",
        pronunciation: "[dɪˈnaɪəl]",
        partOfSpeech: "n.",
        definition: "拒绝，否认"
    },
    {
        word: "turn down",
        partOfSpeech: "phr.",
        definition: "拒绝；调低"
    },
    {
        word: "subject",
        pronunciation: "[ˈsʌbdʒɪkt;ˈsʌbdʒekt]",
        partOfSpeech: "n.",
        definition: "主题，话题，学科；主体，主语，对象",
        partOfSpeech2: "adj.",
        definition2: "受……的支配的；易受……影响的",
        memoryTip: "sub(向下)+ject(扔)→扔个瓜(热门话题)下去让人们吃→主题；对象；易受影响",
        usage: "be subject to sth. 受制于某事",
        isKey: true
    },
    {
        word: "subjective",
        pronunciation: "[səbˈdʒektɪv]",
        partOfSpeech: "adj.",
        definition: "主观的"
    },
    {
        word: "subjectivity",
        pronunciation: "[ˌsʌbdʒekˈtɪvəti]",
        partOfSpeech: "n.",
        definition: "主观性"
    },
    {
        word: "object",
        pronunciation: "[ˈɒbdʒɪkt]",
        partOfSpeech: "n.",
        definition: "客体，对象，目标，物体",
        pronunciation2: "[əbˈdʒekt]",
        partOfSpeech2: "v.",
        definition2: "反对，不赞成",
        memoryTip: "ob(我不)+ject(投射)→客观物体不会投射；反对",
        usage: "object to sth. 反对某事",
        isKey: true
    },
    {
        word: "objective",
        pronunciation: "[əbˈdʒektɪv]",
        partOfSpeech: "adj.",
        definition: "客观的"
    },
    {
        word: "objectivity",
        pronunciation: "[ˌɒbdʒekˈtɪvəti]",
        partOfSpeech: "n.",
        definition: "客观性"
    },
    {
        word: "objection",
        pronunciation: "[əbˈdʒekʃn]",
        partOfSpeech: "n.",
        definition: "反对；异议；反对意见"
    },
    {
        word: "loose",
        pronunciation: "[luːs]",
        partOfSpeech: "v.",
        definition: "释放；松开",
        partOfSpeech2: "adj.",
        definition2: "松散的",
        memoryTip: "一松劲儿(loose)你就输了(lose)",
        usage: "loose end 未了结的部分，未确定的事物",
        isKey: true
    },
    {
        word: "loosen",
        pronunciation: "[ˈluːsn]",
        partOfSpeech: "v.",
        definition: "放松；松懈",
        memoryTip: "loose(松散的)+en(使动后缀)→使放松",
        usage: "loosen up sth. 放松某事"
    },
    {
        word: "tighten",
        pronunciation: "[ˈtaɪtn]",
        partOfSpeech: "v.",
        definition: "收紧；加强"
    },
    {
        word: "fasten",
        pronunciation: "[ˈfæsn]",
        partOfSpeech: "v.",
        definition: "收紧；系牢",
        memoryTip: "收紧（fasten）了缰绳才能让马快跑（fast）"
    },
    {
        word: "lease",
        pronunciation: "[liːs]",
        partOfSpeech: "v.",
        definition: "出租；租赁",
        partOfSpeech2: "n.",
        definition2: "租约",
        memoryTip: "lease(松开)+e(向外)→放松掌握，租出去"
    },
    {
        word: "rent",
        pronunciation: "[rent]",
        partOfSpeech: "v.",
        definition: "出租；租用",
        partOfSpeech2: "n.",
        definition2: "租金"
    },
    {
        word: "rental",
        pronunciation: "[ˈrentl]",
        partOfSpeech: "n.",
        definition: "出租；租金",
        partOfSpeech2: "adj.",
        definition2: "出租的"
    },
    {
        word: "relax",
        pronunciation: "[rɪˈlæks]",
        partOfSpeech: "v.",
        definition: "放松",
        memoryTip: "re(重新)+lax(松开)→回家后放松"
    },
    {
        word: "relaxation",
        pronunciation: "[ˌriːlækˈseɪʃn]",
        partOfSpeech: "n.",
        definition: "放松；休闲"
    },
    {
        word: "neurotic",
        pronunciation: "[nʊˈrɑːtɪk]",
        partOfSpeech: "adj.",
        definition: "神经质的，神经过敏的",
        memoryTip: "neuro（神经）+tic（后缀）"
    },
    {
        word: "release",
        pronunciation: "[rɪˈliːs]",
        partOfSpeech: "v.",
        definition: "释放",
        partOfSpeech2: "n.",
        definition2: "释放，放出；发布，发行",
        usage: "release sb. from... 使某人从……中解脱",
        isKey: true
    },
    {
        word: "imprison",
        pronunciation: "[ɪmˈprɪzn]",
        partOfSpeech: "v.",
        definition: "监禁，关押",
        memoryTip: "im（里面）+prison（监狱）→关到监狱里面"
    },
    {
        word: "fact",
        pronunciation: "[fækt]",
        partOfSpeech: "n.",
        definition: "事实",
        memoryTip: "Act is fact. 实践即事实。",
        usage: "in fact/as a matter of fact 事实上"
    },
    {
        word: "factual",
        pronunciation: "[ˈfæktʃuəl]",
        partOfSpeech: "adj.",
        definition: "事实的"
    },
    {
        word: "fiction",
        pronunciation: "[ˈfɪkʃn]",
        partOfSpeech: "n.",
        definition: "小说；虚构的事"
    },
    {
        word: "nonfiction",
        pronunciation: "[nɑnˈfɪkʃən]",
        partOfSpeech: "n.",
        definition: "非虚构作品；纪实文学"
    },
    {
        word: "factor",
        pronunciation: "[ˈfæktə(r)]",
        partOfSpeech: "n.",
        definition: "因素；因子",
        memoryTip: "fact(事实)+or(东西)→构成事实的东西→因素"
    },
    {
        word: "feasible",
        pronunciation: "[ˈfiːzəbl]",
        partOfSpeech: "adj.",
        definition: "可行的",
        memoryTip: "feas(fact做)+ible(的)→可以做的→可行的",
        isKey: true
    },
    {
        word: "feasibility",
        pronunciation: "[ˌfiːzəˈbɪləti]",
        partOfSpeech: "n.",
        definition: "可行性"
    },
    {
        word: "viable",
        pronunciation: "[ˈvaɪəbl]",
        partOfSpeech: "adj.",
        definition: "可行的，可实施的"
    },
    {
        word: "via",
        pronunciation: "[ˈviːə]",
        partOfSpeech: "prep.",
        definition: "通过（某种方式、途径）"
    },
    {
        word: "facilitate",
        pronunciation: "[fəˈsɪlɪteɪt]",
        partOfSpeech: "v.",
        definition: "使便利；促进",
        memoryTip: "fac(做)+cili(silly傻瓜)+(ate吃)→傻瓜都有饭吃→便利",
        isKey: true
    },
    {
        word: "facility",
        pronunciation: "[fəˈsɪləti]",
        partOfSpeech: "n.",
        definition: "设施，设备",
        memoryTip: "给人们带来便利的东西"
    },
    {
        word: "gear",
        pronunciation: "[ɡɪr]",
        partOfSpeech: "n.",
        definition: "齿轮，装置，设备",
        partOfSpeech2: "v.",
        definition2: "使适合，使准备好",
        memoryTip: "调整机器的齿轮，让它更适合做某事"
    },
    {
        word: "affect",
        pronunciation: "[əˈfekt]",
        partOfSpeech: "v.",
        definition: "影响；打动",
        memoryTip: "a(加强)+fect(做)→影响"
    },
    {
        word: "affectionate",
        pronunciation: "[əˈfekʃənət]",
        partOfSpeech: "adj.",
        definition: "亲切的，充满感情的，钟爱的",
        memoryTip: "af(俺)+fection(fashion喜欢)+ate(吃)"
    },
    {
        word: "affection",
        pronunciation: "[əˈfekʃn]",
        partOfSpeech: "n.",
        definition: "喜爱；钟爱"
    },
    {
        word: "admirable",
        pronunciation: "[ˈædmərəbl]",
        partOfSpeech: "adj.",
        definition: "极好的，令人羡慕的"
    },
    {
        word: "effect",
        pronunciation: "[ɪˈfekt]",
        partOfSpeech: "n.",
        definition: "效果；影响；效应",
        partOfSpeech2: "v.",
        definition2: "实现",
        memoryTip: "e(向外)+fect(做)→效果显现",
        usage: [
            "take effect 生效",
            "in effect 实际上"
        ]
    },
    {
        word: "outcome",
        pronunciation: "[ˈaʊtkʌm]",
        partOfSpeech: "n.",
        definition: "结果，效果"
    },
    {
        word: "aftermath",
        pronunciation: "[ˈæftərmæθ]",
        partOfSpeech: "n.",
        definition: "（不好的）后果",
        memoryTip: "考完数学后成绩很不好，后果很严重！"
    },
    {
        word: "effective",
        pronunciation: "[ɪˈfektɪv]",
        partOfSpeech: "adj.",
        definition: "有效果的，有效的",
        memoryTip: "effect(效果)+tive(的)→有效果的"
    },
    {
        word: "effectiveness",
        pronunciation: "[ɪˈfektɪvnəs]",
        partOfSpeech: "n.",
        definition: "有效性"
    },
    {
        word: "efficient",
        pronunciation: "[ɪˈfɪʃnt]",
        partOfSpeech: "adj.",
        definition: "效率高的，高效的",
        memoryTip: "efficient跟effect长得不一样，意思也不同",
        isKey: true
    },
    {
        word: "efficiency",
        pronunciation: "[ɪˈfɪʃnsi]",
        partOfSpeech: "n.",
        definition: "高效性"
    },
    {
        word: "defect",
        pronunciation: "[ˈdiːfekt;dɪˈfekt]",
        partOfSpeech: "n.",
        definition: "缺点，缺陷",
        memoryTip: "de(否定)+fect(做)→做得不到位→缺点，缺陷",
        isKey: true
    },
    {
        word: "deficient",
        pronunciation: "[dɪˈfɪʃnt]",
        partOfSpeech: "adj.",
        definition: "缺乏的"
    },
    {
        word: "deficiency",
        pronunciation: "[dɪˈfɪʃnsi]",
        partOfSpeech: "n.",
        definition: "缺乏，不足"
    },
    {
        word: "deficit",
        pronunciation: "[ˈdefɪsɪt]",
        partOfSpeech: "n.",
        definition: "(财政)赤字；亏损",
        memoryTip: "de(否定)+face(面对)+it(它)→不敢面对它→亏损"
    },
    {
        word: "disability",
        pronunciation: "[ˌdɪsəˈbɪləti]",
        partOfSpeech: "n.",
        definition: "残疾；缺陷"
    },
    {
        word: "handicap",
        pronunciation: "[ˈhændikæp]",
        partOfSpeech: "n.",
        definition: "残疾；障碍，不利条件",
        memoryTip: "手上（hand）总拿着喝药的杯子（cup）→有身体障碍"
    },
    {
        word: "perfect",
        pronunciation: "[ˈpɜːfɪkt]",
        partOfSpeech: "adj.",
        definition: "完美的",
        pronunciation2: "[pəˈfekt]",
        partOfSpeech2: "v.",
        definition2: "使完善",
        memoryTip: "per(穿透)+fect(做)→做通透→完美",
        isKey: true
    },
    {
        word: "perfection",
        pronunciation: "[pəˈfekʃn]",
        partOfSpeech: "n.",
        definition: "完善"
    },
    {
        word: "proficient",
        pronunciation: "[prəˈfɪʃnt]",
        partOfSpeech: "adj.",
        definition: "熟练的",
        memoryTip: "pro(深入)+fic(做)+cient(的)→深入钻研→熟练的"
    },
    {
        word: "proficiency",
        pronunciation: "[prəˈfɪʃnsi]",
        partOfSpeech: "n.",
        definition: "熟练"
    },
    {
        word: "experienced",
        pronunciation: "[ɪkˈspɪriənst]",
        partOfSpeech: "adj.",
        definition: "熟练的，有经验的"
    },
    {
        word: "profit",
        pronunciation: "[ˈprɒfɪt]",
        partOfSpeech: "n.",
        definition: "利润",
        memoryTip: "pro(深入)+fit(做)→熟练才能赚钱"
    },
    {
        word: "profitable",
        pronunciation: "[ˈprɒfɪtəbl]",
        partOfSpeech: "adj.",
        definition: "有利润的；有利可图的"
    },
    {
        word: "profitability",
        pronunciation: "[ˌprɒfɪtəˈbɪləti]",
        partOfSpeech: "n.",
        definition: "盈利性，盈利能力"
    },
    {
        word: "earnings",
        pronunciation: "[ˈɜːrnɪŋz]",
        partOfSpeech: "n.",
        definition: "收入；利润"
    },
    {
        word: "infect",
        pronunciation: "[ɪnˈfekt]",
        partOfSpeech: "v.",
        definition: "使感染；传染",
        memoryTip: "in(向内)+fect(做)→使感染"
    },
    {
        word: "infection",
        pronunciation: "[ɪnˈfekʃn]",
        partOfSpeech: "n.",
        definition: "感染"
    },
    {
        word: "infest",
        pronunciation: "[ɪnˈfest]",
        partOfSpeech: "v.",
        definition: "大量滋生，大量出现",
        memoryTip: "in（在里面）+fest（festival节日）→蟑螂在家里过节→大量滋生"
    },
    {
        word: "sacrifice",
        pronunciation: "[ˈsækrɪfaɪs]",
        partOfSpeech: "v.",
        definition: "牺牲",
        partOfSpeech2: "n.",
        definition2: "牺牲品",
        memoryTip: "sacri(神圣)+fice(做)→祭祀中的牺牲品"
    },
    {
        word: "sacred",
        pronunciation: "[ˈseɪkrɪd]",
        partOfSpeech: "adj.",
        definition: "神圣的"
    },
    {
        word: "secret",
        pronunciation: "[ˈsiːkrət]",
        partOfSpeech: "n.",
        definition: "秘密",
        partOfSpeech2: "adj.",
        definition2: "秘密的"
    },
    {
        word: "saint",
        pronunciation: "[seɪnt]",
        partOfSpeech: "n.",
        definition: "圣徒，圣人"
    },
    {
        word: "victim",
        pronunciation: "[ˈvɪktɪm]",
        partOfSpeech: "n.",
        definition: "受害者；牺牲品",
        memoryTip: "vict（战胜）+im（我）→别人战胜了我，我就成了别人胜利的牺牲品"
    },
    {
        word: "level",
        pronunciation: "[ˈlevl]",
        partOfSpeech: "n.",
        definition: "水平；水准；等级",
        partOfSpeech2: "v.",
        definition2: "使变平，使公平",
        partOfSpeech3: "adj.",
        definition3: "平的",
        memoryTip: "Wingardium Leviosa(《哈利·波特》里的悬浮咒)",
        isKey: true
    },
    {
        word: "layer",
        pronunciation: "[ler]",
        partOfSpeech: "n.",
        definition: "层；层次",
        memoryTip: "lay（放置，安放）+er（后缀）→一层层放置东西"
    },
    {
        word: "lever",
        pronunciation: "[ˈliːvə(r)]",
        partOfSpeech: "n.",
        definition: "杠杆；操纵杆；筹码",
        partOfSpeech2: "v.",
        definition2: "撬动",
        memoryTip: "lev(抬高)+er(起作用的事物)→杠杆"
    },
    {
        word: "leverage",
        pronunciation: "[ˈliːvərɪdʒ]",
        partOfSpeech: "n.",
        definition: "杠杆作用"
    },
    {
        word: "levy",
        pronunciation: "[ˈlevi]",
        partOfSpeech: "v.",
        definition: "征收(税)",
        partOfSpeech2: "n.",
        definition2: "税款",
        memoryTip: "'来喂'→交税来喂我"
    },
    {
        word: "charge",
        pronunciation: "[tʃɑːrdʒ]",
        partOfSpeech: "v.",
        definition: "收费；充电；指控；冲锋",
        partOfSpeech2: "n.",
        definition2: "收费；充电；指控；冲锋"
    },
    {
        word: "alleviate",
        pronunciation: "[əˈliːvieɪt]",
        partOfSpeech: "v.",
        definition: "减轻，缓解，缓和",
        memoryTip: "al(加强)+lev(变轻)+ate→缓解",
        isKey: true
    },
    {
        word: "alleviation",
        pronunciation: "[əˌliːviˈeɪʃn]",
        partOfSpeech: "n.",
        definition: "减缓，缓和"
    },
    {
        word: "elevate",
        pronunciation: "[ˈelɪveɪt]",
        partOfSpeech: "v.",
        definition: "提高，提升",
        memoryTip: "e(向外)+lev(抬高)+ate(动词后缀)→提高"
    },
    {
        word: "elevator",
        pronunciation: "[ˈelɪveɪtə(r)]",
        partOfSpeech: "n.",
        definition: "电梯",
        memoryTip: "e(向外)+lev(抬高)+or(事物)→用来抬高的东西→电梯"
    },
    {
        word: "lift",
        pronunciation: "[lɪft]",
        partOfSpeech: "v.",
        definition: "升起，举起，抬升",
        partOfSpeech2: "n.",
        definition2: "上升；电梯"
    },
    {
        word: "relieve",
        pronunciation: "[rɪˈliːv]",
        partOfSpeech: "v.",
        definition: "缓解，缓和，减轻",
        memoryTip: "re(重新)+lieve(变轻)→从病痛压力中缓解",
        isKey: true
    },
    {
        word: "relief",
        pronunciation: "[rɪˈliːf]",
        partOfSpeech: "n.",
        definition: "慰藉；轻松，解脱，缓和；(灾区)救济"
    },
    {
        word: "remedy",
        pronunciation: "[ˈremədi]",
        partOfSpeech: "n.",
        definition: "救济；药品；解决办法",
        memoryTip: "re（反复）+med（药物）+y（后缀）→反复吃药"
    },
    {
        word: "bid",
        pronunciation: "[bɪd]",
        partOfSpeech: "v.",
        definition: "出价；竞标；意图",
        partOfSpeech2: "n.",
        definition2: "出价，投标；溢价；意图",
        memoryTip: "势在'必得'(bid)→竞标，意图"
    },
    {
        word: "master",
        pronunciation: "[ˈmɑːstə(r)]",
        partOfSpeech: "n.",
        definition: "主人；硕士；大师",
        partOfSpeech2: "v.",
        definition2: "精通，掌握",
        memoryTip: "mast(must)+er→对你说'必须'的人→主人"
    },
    {
        word: "bachelor",
        pronunciation: "[ˈbætʃələr]",
        partOfSpeech: "n.",
        definition: "学士；单身汉",
        memoryTip: "想拿到学士学位只能在答辩时与导师瞎'掰扯'（bache）"
    },
    {
        word: "doubt",
        pronunciation: "[daʊt]",
        partOfSpeech: "v.",
        definition: "怀疑，质疑",
        partOfSpeech2: "n.",
        definition2: "疑问，怀疑",
        isKey: true
    },
    {
        word: "undoubted",
        pronunciation: "[ʌnˈdaʊtɪd]",
        partOfSpeech: "adj.",
        definition: "毋庸置疑的"
    },
    {
        word: "undoubtedly",
        pronunciation: "[ʌnˈdaʊtɪdli]",
        partOfSpeech: "adv.",
        definition: "毋庸置疑地"
    },
    {
        word: "distrust",
        pronunciation: "[dɪsˈtrʌst]",
        partOfSpeech: "v.",
        definition: "不信任，怀疑",
        partOfSpeech2: "n.",
        definition2: "不信任，怀疑"
    },
    {
        word: "argument",
        pronunciation: "[ˈɑːɡjumənt]",
        partOfSpeech: "n.",
        definition: "论点，观点；论据，理由",
        memoryTip: "argue(争论，主张)+ment(名词后缀)→论点；理由",
        isKey: true
    },
    {
        word: "argue",
        pronunciation: "[ˈɑːɡjuː]",
        partOfSpeech: "v.",
        definition: "争吵；争论；主张，表明"
    }
];
const unit5Words = [
    {
        word: "maintain",
        pronunciation: "[meɪnˈteɪn]",
        partOfSpeech: "v.",
        definition: "维持，维修，维护；坚持认为",
        memoryTip: "main(停留)+tain(后缀)→维持，维护",
        isKey: true
    },
    {
        word: "maintenance",
        pronunciation: "[ˈmeɪntənəns]",
        partOfSpeech: "n.",
        definition: "维护；维修；维护费"
    },
    {
        word: "upkeep",
        pronunciation: "[ˈʌpkiːp]",
        partOfSpeech: "n.",
        definition: "维护；保养"
    },
    {
        word: "remain",
        pronunciation: "[rɪˈmeɪn]",
        partOfSpeech: "v.",
        definition: "遗留；保持不变；仍然是",
        partOfSpeech2: "n.",
        definition2: "遗留物，残留物",
        memoryTip: "re(反复)+main(停留)→保持不变",
        isKey: true
    },
    {
        word: "remaining",
        pronunciation: "[rɪˈmeɪnɪŋ]",
        partOfSpeech: "adj.",
        definition: "剩余的；遗留的"
    },
    {
        word: "permanent",
        pronunciation: "[ˈpɜːmənənt]",
        partOfSpeech: "adj.",
        definition: "永久的",
        memoryTip: "per(贯穿始终)+man(停留)+ent(后缀)→永久的"
    },
    {
        word: "everlasting",
        pronunciation: "[ˌevərˈlæstɪŋ]",
        partOfSpeech: "adj.",
        definition: "永久的，永恒的",
        memoryTip: "ever（一直）+lasting（持续的，持久的）→永久的"
    },
    {
        word: "place",
        pronunciation: "[pleɪs]",
        partOfSpeech: "n.",
        definition: "地方",
        partOfSpeech2: "v.",
        definition2: "放置，安置",
        isKey: true
    },
    {
        word: "placement",
        pronunciation: "[ˈpleɪsmənt]",
        partOfSpeech: "n.",
        definition: "安排；安置；安放"
    },
    {
        word: "plaza",
        pronunciation: "[ˈplɑːzə]",
        partOfSpeech: "n.",
        definition: "广场；购物中心",
        memoryTip: "place(地方)+za(扎眼)→扎眼的地方→广场；购物中心"
    },
    {
        word: "palace",
        pronunciation: "[ˈpæləs]",
        partOfSpeech: "n.",
        definition: "王宫，宫殿",
        memoryTip: "pa(拍)+place(地方)→要拍照的地方→王宫，宫殿"
    },
    {
        word: "birthplace",
        pronunciation: "[ˈbɜːθpleɪs]",
        partOfSpeech: "n.",
        definition: "出生地；发源地"
    },
    {
        word: "workplace",
        pronunciation: "[ˈwɜːkpleɪs]",
        partOfSpeech: "n.",
        definition: "车间；工作场所，职场"
    },
    {
        word: "marketplace",
        pronunciation: "[ˈmɑːkɪtpleɪs]",
        partOfSpeech: "n.",
        definition: "市场"
    },
    {
        word: "replace",
        pronunciation: "[rɪˈpleɪs]",
        partOfSpeech: "v.",
        definition: "代替，取代",
        memoryTip: "re(重新)+place(放置)→代替，取代",
        usage: "replace A with B 用B代替A",
        isKey: true
    },
    {
        word: "replacement",
        pronunciation: "[rɪˈpleɪsmənt]",
        partOfSpeech: "n.",
        definition: "代替；替代品"
    },
    {
        word: "irreplaceable",
        pronunciation: "[ˌɪrɪˈpleɪsəbl]",
        partOfSpeech: "adj.",
        definition: "无法取代的",
        memoryTip: "ir(不)+replace(取代)+able(可以的)→无法取代的"
    },
    {
        word: "misplace",
        pronunciation: "[ˌmɪsˈpleɪs]",
        partOfSpeech: "v.",
        definition: "乱放；错放",
        memoryTip: "mis(错误的)+place(放置)→错放；乱放"
    },
    {
        word: "misplaced",
        pronunciation: "[ˌmɪsˈpleɪst]",
        partOfSpeech: "adj.",
        definition: "不合时宜的"
    },
    {
        word: "ascend",
        pronunciation: "[əˈsend]",
        partOfSpeech: "v.",
        definition: "上升，往上走",
        memoryTip: "a（强化）+scend（攀爬）→爬升，上升"
    },
    {
        word: "descendant",
        pronunciation: "[dɪˈsendənt]",
        partOfSpeech: "n.",
        definition: "后代，子孙",
        memoryTip: "de（向下）+scend（攀爬）+ant（人事物后缀）→家族中不断走下去的人→后代",
        isKey: true
    },
    {
        word: "descend",
        pronunciation: "[dɪˈsend]",
        partOfSpeech: "v.",
        definition: "下降，往下走"
    },
    {
        word: "offspring",
        pronunciation: "[ˈɔːfsprɪŋ]",
        partOfSpeech: "n.",
        definition: "后代",
        memoryTip: "张三的后代犹如雨后（off）春（spring）笋一样多"
    },
    {
        word: "transcend",
        pronunciation: "[trænˈsend]",
        partOfSpeech: "v.",
        definition: "超出，超越（通常的界限）",
        memoryTip: "trans（转移，变形）+scend（走）→不走寻常路、以不同的方式走→超越"
    },
    {
        word: "transcendence",
        pronunciation: "[trænˈsendəns]",
        partOfSpeech: "n.",
        definition: "超越"
    },
    {
        word: "transcendental",
        pronunciation: "[ˌtrænsenˈdentl]",
        partOfSpeech: "adj.",
        definition: "超验的（超越经验的）；超脱的"
    },
    {
        word: "value",
        pronunciation: "[ˈvæljuː]",
        partOfSpeech: "n.",
        definition: "价值；价值观(常为复数形式)",
        partOfSpeech2: "v.",
        definition2: "估价；珍视，重视",
        isKey: true
    },
    {
        word: "valuable",
        pronunciation: "[ˈvæljuəbl]",
        partOfSpeech: "adj.",
        definition: "宝贵的；有价值的"
    },
    {
        word: "invaluable",
        pronunciation: "[ɪnˈvæljuəbl]",
        partOfSpeech: "adj.",
        definition: "无价的；极为宝贵的"
    },
    {
        word: "cherish",
        pronunciation: "[ˈtʃerɪʃ]",
        partOfSpeech: "v.",
        definition: "珍视"
    },
    {
        word: "treasure",
        pronunciation: "[ˈtreʒər]",
        partOfSpeech: "v.",
        definition: "珍视",
        partOfSpeech2: "n.",
        definition2: "珍宝"
    },
    {
        word: "Treasury",
        pronunciation: "[ˈtreʒəri]",
        partOfSpeech: "n.",
        definition: "财政部"
    },
    {
        word: "available",
        pronunciation: "[əˈveɪləbl]",
        partOfSpeech: "adj.",
        definition: "可得到的；可利用的；有空的",
        memoryTip: "a(强化)+vail(价值)+able(的)→有利用价值的",
        usage: "readily available 可以现成、方便地得到、利用的",
        isKey: true
    },
    {
        word: "availability",
        pronunciation: "[əˌveɪləˈbɪləti]",
        partOfSpeech: "n.",
        definition: "可用性"
    },
    {
        word: "unavailable",
        pronunciation: "[ˌʌnəˈveɪləbl]",
        partOfSpeech: "adj.",
        definition: "不可用的"
    },
    {
        word: "evaluate",
        pronunciation: "[ɪˈvæljueɪt]",
        partOfSpeech: "v.",
        definition: "评估；估价",
        memoryTip: "e(向外)+value(价值)+ate(动词)→价值外化→估价"
    },
    {
        word: "evaluation",
        pronunciation: "[ɪˌvæljuˈeɪʃn]",
        partOfSpeech: "n.",
        definition: "评估；评价"
    },
    {
        word: "overvalue",
        pronunciation: "[ˌəʊvəˈvæljuː]",
        partOfSpeech: "v.",
        definition: "估价过高；高估",
        memoryTip: "over(过度的)+value(估价)→高估"
    },
    {
        word: "undervalue",
        pronunciation: "[ˌʌndəˈvæljuː]",
        partOfSpeech: "v.",
        definition: "估价过低；低估",
        memoryTip: "under(不足的，向下的)+value(估价)→低估"
    },
    {
        word: "equivalent",
        pronunciation: "[ɪˈkwɪvələnt]",
        partOfSpeech: "adj.",
        definition: "等价的，相同的",
        partOfSpeech2: "n.",
        definition2: "等价物",
        memoryTip: "equal(相等)+value(价值)+ent(的)→价值上相等的\n或：equi(相同)+val(value价值)+ent(人、事、物后缀)→有相同价值的东西→等价物",
        usage: "be equivalent to... 等同于……",
        isKey: true
    },
    {
        word: "liability",
        pronunciation: "[ˌlaɪəˈbɪləti]",
        partOfSpeech: "n.",
        definition: "负债，债务；责任；累赘",
        memoryTip: "li(赖)+ability(能力)→耍赖的能力→负债；责任",
        isKey: true
    },
    {
        word: "liable",
        pronunciation: "[ˈlaɪəbl]",
        partOfSpeech: "adj.",
        definition: "负有责任的"
    },
    {
        word: "asset",
        pronunciation: "[ˈæset]",
        partOfSpeech: "n.",
        definition: "资产；财富"
    },
    {
        word: "loan",
        pronunciation: "[loʊn]",
        partOfSpeech: "n.",
        definition: "贷款"
    },
    {
        word: "alliance",
        pronunciation: "[əˈlaɪəns]",
        partOfSpeech: "n.",
        definition: "联盟；同盟",
        memoryTip: "a(强化)+lie(依赖)+ance(名词后缀)→联盟"
    },
    {
        word: "ally",
        pronunciation: "[ˈælaɪ][əˈlaɪ]",
        partOfSpeech: "n.",
        definition: "盟友；(尤指战时的)同盟国",
        partOfSpeech2: "v.",
        definition2: "结盟"
    },
    {
        word: "rally",
        pronunciation: "[ˈræli]",
        partOfSpeech: "v.",
        definition: "召集，集合",
        partOfSpeech2: "n.",
        definition2: "集会"
    },
    {
        word: "coalition",
        pronunciation: "[ˌkoʊəˈlɪʃn]",
        partOfSpeech: "n.",
        definition: "联盟，联合"
    },
    {
        word: "rely",
        pronunciation: "[rɪˈlaɪ]",
        partOfSpeech: "v.",
        definition: "依赖",
        memoryTip: "re(反复)+ly(依靠)→依赖",
        usage: "rely on sth. 依赖某物"
    },
    {
        word: "reliable",
        pronunciation: "[rɪˈlaɪəbl]",
        partOfSpeech: "adj.",
        definition: "可靠的"
    },
    {
        word: "unreliable",
        pronunciation: "[ˌʌnrɪˈlaɪəbl]",
        partOfSpeech: "adj.",
        definition: "不可靠的"
    },
    {
        word: "reliability",
        pronunciation: "[rɪˌlaɪəˈbɪləti]",
        partOfSpeech: "n.",
        definition: "可靠性"
    },
    {
        word: "underlie",
        pronunciation: "[ˌʌndəˈlaɪ]",
        partOfSpeech: "v.",
        definition: "构成……的基础；作为……的原因",
        memoryTip: "under(下面)+lie(躺着)→A躺在B下边→A是B的基础",
        isKey: true
    },
    {
        word: "underlying",
        pronunciation: "[ˌʌndəˈlaɪɪŋ]",
        partOfSpeech: "adj.",
        definition: "潜在的，表面之下的；根本的"
    },
    {
        word: "potential",
        pronunciation: "[pəˈtenʃl]",
        partOfSpeech: "adj.",
        definition: "潜在的；可能的",
        partOfSpeech2: "n.",
        definition2: "潜能，潜力"
    },
    {
        word: "apply",
        pronunciation: "[əˈplaɪ]",
        partOfSpeech: "v.",
        definition: "应用；适用于；申请",
        memoryTip: "a(强化)+ply(用)→应用，适用",
        usage: "apply for sth. 申请某物",
        isKey: true
    },
    {
        word: "application",
        pronunciation: "[ˌæplɪˈkeɪʃn]",
        partOfSpeech: "n.",
        definition: "应用；应用程序(APP)；申请",
        memoryTip: "applicat(应用，申请)+tion(名词后缀)"
    },
    {
        word: "applicable",
        pronunciation: "[əˈplɪkəbl;ˈæplɪkəbl]",
        partOfSpeech: "adj.",
        definition: "适用的；合适的",
        memoryTip: "applic(应用)+able(可以的)→可以应用功能的→适用的，合适的"
    },
    {
        word: "petition",
        pronunciation: "[pəˈtɪʃn]",
        partOfSpeech: "n.",
        definition: "请求；请愿",
        memoryTip: "pity（怜悯，同情）+tion（神）→请求神仙怜悯自己"
    },
    {
        word: "comply",
        pronunciation: "[kəmˈplaɪ]",
        partOfSpeech: "v.",
        definition: "遵从；服从(规则，规矩)",
        memoryTip: "com(一起)+ply(玩)→一起玩就要遵守规矩",
        usage: "comply with... 遵守(某种规则、规矩)",
        isKey: true
    },
    {
        word: "compliance",
        pronunciation: "[kəmˈplaɪəns]",
        partOfSpeech: "n.",
        definition: "遵从，服从；合规"
    },
    {
        word: "violate",
        pronunciation: "[ˈvaɪəleɪt]",
        partOfSpeech: "v.",
        definition: "违反，侵犯"
    },
    {
        word: "monopoly",
        pronunciation: "[məˈnɒpəli]",
        partOfSpeech: "n.",
        definition: "垄断(贬义)",
        memoryTip: "mono(单一)+poly(玩)→一个人玩→垄断"
    },
    {
        word: "anti-trust",
        pronunciation: "[ˈæntitrʌst]",
        partOfSpeech: "n.",
        definition: "反垄断，反托拉斯"
    },
    {
        word: "supply",
        pronunciation: "[səˈplaɪ]",
        partOfSpeech: "v.",
        definition: "供给，提供",
        partOfSpeech2: "n.",
        definition2: "供应，提供",
        memoryTip: "sup(向上)+ply(用)→上供→供给，提供",
        isKey: true
    },
    {
        word: "supplement",
        pronunciation: "[ˈsʌplɪmənt]",
        partOfSpeech: "n.",
        definition: "补充物，增补物，营养品；增刊，附录"
    },
    {
        word: "demand",
        pronunciation: "[dɪˈmɑːnd]",
        partOfSpeech: "v.",
        definition: "强烈要求；需要",
        partOfSpeech2: "n.",
        definition2: "需求",
        memoryTip: "de(强化)+mand(命令)→要求"
    },
    {
        word: "command",
        pronunciation: "[kəˈmɑːnd]",
        partOfSpeech: "v.",
        definition: "命令，指挥，控制",
        partOfSpeech2: "n.",
        definition2: "命令，指挥，控制",
        memoryTip: "com(一起)+mand(命令)→命令很多人→命令，指挥"
    },
    {
        word: "mandate",
        pronunciation: "[ˈmændeɪt;ˌmænˈdeɪt]",
        partOfSpeech: "v.",
        definition: "强制执行，授权",
        pronunciation2: "[ˈmændeɪt]",
        partOfSpeech2: "n.",
        definition2: "授权",
        memoryTip: "mand(命令)+ate(吃)→'来人，喂公子吃饼'→强制执行",
        isKey: true
    },
    {
        word: "mandatory",
        pronunciation: "[ˈmændətəri;mænˈdeɪtəri]",
        partOfSpeech: "adj.",
        definition: "强制性的，法定的，义务的"
    },
    {
        word: "give",
        pronunciation: "[ɡɪv]",
        partOfSpeech: "v.",
        definition: "给予；付出",
        usage: "give sb. sth. 给予某人某物"
    },
    {
        word: "forgive",
        pronunciation: "[fəˈɡɪv]",
        partOfSpeech: "v.",
        definition: "原谅",
        memoryTip: "for+give→原谅是为了继续给予爱"
    },
    {
        word: "unforgivable",
        pronunciation: "[ˌʌnfəˈɡɪvəbl]",
        partOfSpeech: "adj.",
        definition: "不可原谅的"
    },
    {
        word: "mercy",
        pronunciation: "[ˈmɜːrsi]",
        partOfSpeech: "v.",
        definition: "宽恕",
        partOfSpeech2: "n.",
        definition2: "宽恕；仁慈；怜悯"
    },
    {
        word: "merciful",
        pronunciation: "[ˈmɜːrsɪfl]",
        partOfSpeech: "adj.",
        definition: "仁慈的；宽容的"
    },
    {
        word: "get",
        pronunciation: "[ɡet]",
        partOfSpeech: "v.",
        definition: "得到；让；变得；被",
        isKey: true
    },
    {
        word: "forget",
        pronunciation: "[fəˈɡet]",
        partOfSpeech: "v.",
        definition: "遗忘",
        memoryTip: "for+get→遗忘是为了获得新知识"
    },
    {
        word: "unforgettable",
        pronunciation: "[ˌʌnfəˈɡetəbl]",
        partOfSpeech: "adj.",
        definition: "令人难忘的"
    },
    {
        word: "gather",
        pronunciation: "[ˈɡæðə(r)]",
        partOfSpeech: "v.",
        definition: "搜集；聚集；集合",
        memoryTip: "together to gather，人类早期聚集在一起是为了方便采集果实"
    },
    {
        word: "gatherer",
        pronunciation: "[ˈɡæðərə(r)]",
        partOfSpeech: "n.",
        definition: "采集者"
    },
    {
        word: "accumulate",
        pronunciation: "[əˈkjuːmjəleɪt]",
        partOfSpeech: "v.",
        definition: "积累"
    },
    {
        word: "assemble",
        pronunciation: "[əˈsembl]",
        partOfSpeech: "v.",
        definition: "集合；组装",
        memoryTip: "a（强化）+sem（same相同的）+ble（抱）→同类的人抱在一起→集合"
    },
    {
        word: "finance",
        pronunciation: "[ˈfaɪnæns;faɪˈnæns;fəˈnæns]",
        partOfSpeech: "n.",
        definition: "财务；金融",
        partOfSpeech2: "v.",
        definition2: "为……提供资金；资助",
        memoryTip: "fin(结束)+nance(难死)→钱没了就难死→财务；金融",
        isKey: true
    },
    {
        word: "financial",
        pronunciation: "[faɪˈnænʃl;fəˈnænʃl]",
        partOfSpeech: "adj.",
        definition: "财务的；金融的"
    },
    {
        word: "fiscal",
        pronunciation: "[ˈfɪskl]",
        partOfSpeech: "adj.",
        definition: "财政的",
        partOfSpeech2: "n.",
        definition2: "财政"
    },
    {
        word: "sort",
        pronunciation: "[sɔːt]",
        partOfSpeech: "n.",
        definition: "种类；类别；分类；排序",
        partOfSpeech2: "v.",
        definition2: "分类；整理，安排妥当",
        usage: "sort out sth. 理清楚"
    },
    {
        word: "analogous",
        pronunciation: "[əˈnæləɡəs]",
        partOfSpeech: "adj.",
        definition: "相似的，类似的",
        memoryTip: "ana(视觉上轴对称)+logo(逻辑)+ous(形容词后缀)→相似的",
        usage: "be analogous to sth. 与某物相似",
        isKey: true
    },
    {
        word: "analogy",
        pronunciation: "[əˈnælədʒi]",
        partOfSpeech: "n.",
        definition: "类比，比喻，类推"
    },
    {
        word: "comparable",
        pronunciation: "[ˈkɑːmpərəbl]",
        partOfSpeech: "adj.",
        definition: "类似的，可比较的"
    },
    {
        word: "still",
        pronunciation: "[stɪl]",
        partOfSpeech: "adj.",
        definition: "静止的",
        partOfSpeech2: "adv.",
        definition2: "仍然，还是，即便如此；更",
        memoryTip: "不变的位置→静止；不变的速度→仍然；不变的加速度→更",
        isKey: true
    },
    {
        word: "even",
        pronunciation: "[ˈiːvn]",
        partOfSpeech: "v.",
        definition: "使变平",
        partOfSpeech2: "adj.",
        definition2: "平的，平坦的",
        partOfSpeech3: "adv.",
        definition3: "即使，甚至，连；更",
        memoryTip: "一样的→平的；谁来都一样→即使/甚至/连这样也不会改变结果",
        isKey: true
    },
    {
        word: "uneven",
        pronunciation: "[ʌnˈiːvn]",
        partOfSpeech: "adj.",
        definition: "不公平的"
    }
];
const unit6Words = [
    {
        word: "valid",
        pronunciation: "[ˈvælɪd]",
        partOfSpeech: "adj.",
        definition: "确凿的；有效的；合理的",
        memoryTip: "val(强壮)+lid(有力的)→强有力的→受认可的",
        isKey: true
    },
    {
        word: "invalid",
        pronunciation: "[ɪnˈvælɪd]",
        partOfSpeech: "adj.",
        definition: "无效的"
    },
    {
        word: "validate",
        pronunciation: "[ˈvælɪdeɪt]",
        partOfSpeech: "v.",
        definition: "证实；确认；认可"
    },
    {
        word: "invalidate",
        pronunciation: "[ɪnˈvælɪdeɪt]",
        partOfSpeech: "v.",
        definition: "使……无效；使……作废；证明……有误"
    },
    {
        word: "prevail",
        pronunciation: "[prɪˈveɪl]",
        partOfSpeech: "v.",
        definition: "流行，盛行；取得胜利，大胜",
        memoryTip: "pre(预先)+vail(强壮)→一开始就很强壮→大胜;流行"
    },
    {
        word: "prevailing",
        pronunciation: "[prɪˈveɪlɪŋ]",
        partOfSpeech: "adj.",
        definition: "盛行的，流行的，普遍存在的",
        memoryTip: "prevail(流行)+ing(正在……的)→流行中的→盛行的",
        isKey: true
    },
    {
        word: "prevalent",
        pronunciation: "[ˈprevələnt]",
        partOfSpeech: "adj.",
        definition: "盛行的，流行的，普遍存在的"
    },
    {
        word: "predominant",
        pronunciation: "[prɪˈdɑːmɪnənt]",
        partOfSpeech: "adj.",
        definition: "优势的，占主导地位的"
    },
    {
        word: "prime",
        pronunciation: "[praɪm]",
        partOfSpeech: "adj.",
        definition: "首要的；优异的",
        memoryTip: "pri(主要)+me(我)→自己是最首要的",
        usage: "Prime Minister 首相",
        isKey: true
    },
    {
        word: "premier",
        pronunciation: "[ˈpremiə(r)]",
        partOfSpeech: "n.",
        definition: "总理；首相"
    },
    {
        word: "chancellor",
        pronunciation: "[ˈtʃænsələr]",
        partOfSpeech: "n.",
        definition: "总理；议长"
    },
    {
        word: "primary",
        pronunciation: "[ˈpraɪməri]",
        partOfSpeech: "adj.",
        definition: "主要的；重要的；最初的",
        memoryTip: "pri(主要的)+mary(形容词后缀)→主要的",
        usage: "primary school 小学",
        isKey: true
    },
    {
        word: "prior",
        pronunciation: "[ˈpraɪə(r)]",
        partOfSpeech: "adj.",
        definition: "优先的，更重要的；早先的",
        memoryTip: "pri(主要的)+or(比较级)→更重要的→更优先的",
        usage: "prior to sth. 在……之前",
        isKey: true
    },
    {
        word: "prioritize",
        pronunciation: "[praɪˈɒrətaɪz]",
        partOfSpeech: "v.",
        definition: "优先处理，使变得优先"
    },
    {
        word: "priority",
        pronunciation: "[praɪˈɒrəti]",
        partOfSpeech: "n.",
        definition: "优先级，优先度；优先事项",
        memoryTip: "prior(有限的)+ity(名词后缀)→优先级，优先度",
        isKey: true
    },
    {
        word: "principle",
        pronunciation: "[ˈprɪnsəpl]",
        partOfSpeech: "n.",
        definition: "原则；原理",
        memoryTip: "prin(主要的)+cip(把握住)+ple→重点把握住原则、原理"
    },
    {
        word: "discipline",
        pronunciation: "[ˈdɪsəplɪn]",
        partOfSpeech: "n.",
        definition: "纪律；训练；知识领域",
        memoryTip: "dis（否定）+cip（sip喝水）+line（线）→喝水时不能超过这条线→纪律"
    },
    {
        word: "disciplined",
        pronunciation: "[ˈdɪsəplɪnd]",
        partOfSpeech: "adj.",
        definition: "遵守纪律的；受过训练的"
    },
    {
        word: "principal",
        pronunciation: "[ˈprɪnsəpl]",
        partOfSpeech: "adj.",
        definition: "最重要的；主要的",
        partOfSpeech2: "n.",
        definition2: "本金",
        memoryTip: "本金最重要"
    },
    {
        word: "prince",
        pronunciation: "[prɪns]",
        partOfSpeech: "n.",
        definition: "王子"
    },
    {
        word: "princess",
        pronunciation: "[ˈprɪnses]",
        partOfSpeech: "n.",
        definition: "公主，王妃"
    },
    {
        word: "capital",
        pronunciation: "[ˈkæpɪtl]",
        partOfSpeech: "adj.",
        definition: "极好的；死刑的",
        partOfSpeech2: "n.",
        definition2: "首都；大写字母；资本"
    },
    {
        word: "news",
        pronunciation: "[njuːz]",
        partOfSpeech: "n.",
        definition: "新闻；消息",
        memoryTip: "news一堆新鲜事聚在一起→新闻(形容词+s→名词)"
    },
    {
        word: "newsroom",
        pronunciation: "[ˈnjuːzruːm;ˈnjuːzrʊm]",
        partOfSpeech: "n.",
        definition: "新闻编辑室"
    },
    {
        word: "headline",
        pronunciation: "[ˈhedlaɪn]",
        partOfSpeech: "n.",
        definition: "头版头条"
    },
    {
        word: "cover story",
        partOfSpeech: "n.",
        definition: "封面故事"
    },
    {
        word: "gossip",
        pronunciation: "[ˈɡɑːsɪp]",
        partOfSpeech: "v.",
        definition: "流言蜚语；说三道四",
        partOfSpeech2: "n.",
        definition2: "流言蜚语；说三道四",
        memoryTip: "go（去）+sip（喝一杯）→去喝一杯，聊聊八卦"
    },
    {
        word: "renew",
        pronunciation: "[rɪˈnjuː]",
        partOfSpeech: "v.",
        definition: "重新开始，更新",
        memoryTip: "re(重新)+new(新)→重新开始"
    },
    {
        word: "renewable",
        pronunciation: "[rɪˈnjuːəbl]",
        partOfSpeech: "adj.",
        definition: "可更新的，可恢复的，可再生的",
        usage: "renewable energy 可再生能源"
    },
    {
        word: "update",
        pronunciation: "[ˌʌpˈdeɪt,ˈʌpdeɪt]",
        partOfSpeech: "v.",
        definition: "更新"
    },
    {
        word: "outdated",
        pronunciation: "[ˌaʊtˈdeɪtɪd]",
        partOfSpeech: "adj.",
        definition: "过时的，陈旧的"
    },
    {
        word: "novel",
        pronunciation: "[ˈnɒvl]",
        partOfSpeech: "adj.",
        definition: "新颖的，新奇的",
        partOfSpeech2: "n.",
        definition2: "小说",
        memoryTip: "nov(新)+el(形容词后缀)→新奇的→小说里都是新奇的内容"
    },
    {
        word: "novelty",
        pronunciation: "[ˈnɒvlti]",
        partOfSpeech: "n.",
        definition: "新奇，新颖，新鲜"
    },
    {
        word: "innovation",
        pronunciation: "[ˌɪnəˈveɪʃn]",
        partOfSpeech: "n.",
        definition: "创造，创新；新事物，新方法",
        memoryTip: "innovat(创新)+tion(名词后缀)"
    },
    {
        word: "innovative",
        pronunciation: "[ˈɪnəveɪtɪv;ˈɪnəvətɪv]",
        partOfSpeech: "adj.",
        definition: "创新的",
        memoryTip: "in（内部）+nov（新）+tive（形容词后缀）→从根本上变新→创新的",
        isKey: true
    },
    {
        word: "innovate",
        pronunciation: "[ˈɪnəveɪt]",
        partOfSpeech: "v.",
        definition: "创新"
    },
    {
        word: "initial",
        pronunciation: "[ɪˈnɪʃl]",
        partOfSpeech: "adj.",
        definition: "最初的，初始的",
        partOfSpeech2: "n.",
        definition2: "首字母",
        memoryTip: "initi(初始)+al(的)→初始的；头文字D即Initial D",
        isKey: true
    },
    {
        word: "initially",
        pronunciation: "[ɪˈnɪʃəli]",
        partOfSpeech: "adv.",
        definition: "起初，最初"
    },
    {
        word: "initialize",
        pronunciation: "[ɪˈnɪʃəlaɪz]",
        partOfSpeech: "v.",
        definition: "初始化；格式化(磁盘)"
    },
    {
        word: "initialization",
        pronunciation: "[iniʃəlaiˈzeiʃən]",
        partOfSpeech: "n.",
        definition: "初始化"
    },
    {
        word: "initiate",
        pronunciation: "[ɪˈnɪʃieɪt]",
        partOfSpeech: "v.",
        definition: "开始，发起，创始",
        memoryTip: "initi(初始)+ate(使动后缀)→使开始→开始，发起"
    },
    {
        word: "dawn",
        pronunciation: "[dɔːn]",
        partOfSpeech: "n.",
        definition: "黎明；开端，起始"
    },
    {
        word: "initiative",
        pronunciation: "[ɪˈnɪʃətɪv]",
        partOfSpeech: "n.",
        definition: "倡议；新方案；主动权，首创性",
        memoryTip: "初次提出的→新方案",
        isKey: true
    },
    {
        word: "string",
        pronunciation: "[strɪŋ]",
        partOfSpeech: "n.",
        definition: "线，串，系列",
        usage: [
            "a string of 一系列的，一连串的",
            "pull the strings (高位者)幕后暗中操控、主使"
        ]
    },
    {
        word: "chain",
        pronunciation: "[tʃeɪn]",
        partOfSpeech: "n.",
        definition: "链子；连锁店；一连串",
        usage: "blockchain 区块链"
    },
    {
        word: "stringent",
        pronunciation: "[ˈstrɪndʒənt]",
        partOfSpeech: "adj.",
        definition: "严格的，严厉的；紧缩的",
        memoryTip: "string(拉紧)+ent(形容词后缀)→紧缩的；严格的"
    },
    {
        word: "harsh",
        pronunciation: "[hɑːrʃ]",
        partOfSpeech: "adj.",
        definition: "严厉的，严苛的；艰难的",
        memoryTip: "拼写与意思都与hard相似"
    },
    {
        word: "rigorous",
        pronunciation: "[ˈrɪɡərəs]",
        partOfSpeech: "adj.",
        definition: "严格的，严厉的",
        memoryTip: "rigor（锐哥）+us（我们）→锐哥对我们的要求很严格"
    },
    {
        word: "strain",
        pronunciation: "[streɪn]",
        partOfSpeech: "n.",
        definition: "压力；张力；重负",
        partOfSpeech2: "v.",
        definition2: "使……承担压力",
        memoryTip: "s(撕)+train(火车)→压力；张力",
        isKey: true
    },
    {
        word: "stretch",
        pronunciation: "[stretʃ]",
        partOfSpeech: "v.",
        definition: "伸展，延伸；拉紧",
        memoryTip: "音同'撕、拽、抻'→伸展，拉紧"
    },
    {
        word: "constrain",
        pronunciation: "[kənˈstreɪn]",
        partOfSpeech: "v.",
        definition: "强迫，迫使；约束，限制",
        memoryTip: "con(一起)+strain(拉紧)→大家一起拉住一个人→强迫，迫使"
    },
    {
        word: "constraint",
        pronunciation: "[kənˈstreɪnt]",
        partOfSpeech: "n.",
        definition: "强迫；约束；限制条件"
    },
    {
        word: "restrain",
        pronunciation: "[rɪˈstreɪn]",
        partOfSpeech: "v.",
        definition: "制止；阻止；限制；抑制",
        memoryTip: "re(再次)+strain(拉紧)→限制，抑制",
        isKey: true
    },
    {
        word: "restraint",
        pronunciation: "[rɪˈstreɪnt]",
        partOfSpeech: "n.",
        definition: "约束；限制；限制措施"
    },
    {
        word: "restrict",
        pronunciation: "[rɪˈstrɪkt]",
        partOfSpeech: "v.",
        definition: "限制；束缚",
        memoryTip: "re(重新)+strict(严格)→采取限制措施",
        isKey: true
    },
    {
        word: "restriction",
        pronunciation: "[rɪˈstrɪkʃn]",
        partOfSpeech: "n.",
        definition: "限制规定；制约因素"
    },
    {
        word: "mend",
        pronunciation: "[mend]",
        partOfSpeech: "v.",
        definition: "修理，修补；解决",
        memoryTip: "men(男人)+d(do做)→修理可以是男人做的事"
    },
    {
        word: "patch",
        pronunciation: "[pætʃ]",
        partOfSpeech: "v.",
        definition: "（打）补丁；修补",
        partOfSpeech2: "n.",
        definition2: "（打）补丁；修补"
    },
    {
        word: "patchwork",
        pronunciation: "[ˈpætʃwɜːrk]",
        partOfSpeech: "n.",
        definition: "拼凑物"
    },
    {
        word: "amendment",
        pronunciation: "[əˈmendmənt]",
        partOfSpeech: "n.",
        definition: "修改，修订；(宪法的)修正案",
        memoryTip: "a(强化)+mend(修正)+ment(名词后缀)→修改；修正案",
        usage: "The Fifth Amendment (to the Constitution) 宪法第五修正案"
    },
    {
        word: "commend",
        pronunciation: "[kəˈmend]",
        partOfSpeech: "v.",
        definition: "赞扬；认可",
        memoryTip: "com(一起)+mend(修正)→最终结果大家都赞同、认可"
    },
    {
        word: "recommend",
        pronunciation: "[ˌrekəˈmend]",
        partOfSpeech: "v.",
        definition: "推荐；建议",
        memoryTip: "re(再次)+commend(赞扬)→向别人推荐"
    },
    {
        word: "recommendation",
        pronunciation: "[ˌrekəmenˈdeɪʃn]",
        partOfSpeech: "n.",
        definition: "推荐；建议"
    },
    {
        word: "endorse",
        pronunciation: "[ɪnˈdɔːrs]",
        partOfSpeech: "v.",
        definition: "支持，认可，背书",
        memoryTip: "en（使动）+dorse（音同'多丝'）→使对方粉丝变多→支持对方，给对方背书"
    },
    {
        word: "introduce",
        pronunciation: "[ˌɪntrəˈdjuːs]",
        partOfSpeech: "v.",
        definition: "引入；介绍",
        memoryTip: "intro(向内)+duce(带来)→给朋友圈里带来新人",
        isKey: true
    },
    {
        word: "introduction",
        pronunciation: "[ˌɪntrəˈdʌkʃn]",
        partOfSpeech: "n.",
        definition: "采用，引进；介绍，序言，(知识)入门"
    },
    {
        word: "conduct",
        pronunciation: "[kənˈdʌkt]",
        partOfSpeech: "v.",
        definition: "引导，带领；传导；实施，执行",
        pronunciation2: "[ˈkɒndʌkt]",
        partOfSpeech2: "n.",
        definition2: "做法，行为",
        memoryTip: "con(一起)+duct(引导)→引导大家一起做",
        isKey: true
    },
    {
        word: "conductor",
        pronunciation: "[kənˈdʌktə(r)]",
        partOfSpeech: "n.",
        definition: "导体"
    },
    {
        word: "misconduct",
        pronunciation: "[ˌmɪsˈkɒndʌkt]",
        partOfSpeech: "n.",
        definition: "失职；处理不当；行为不端"
    },
    {
        word: "deduct",
        pronunciation: "[dɪˈdʌkt]",
        partOfSpeech: "v.",
        definition: "扣除，减去",
        memoryTip: "de(否定)+duct(带来)→扣除"
    },
    {
        word: "deduction",
        pronunciation: "[dɪˈdʌkʃn]",
        partOfSpeech: "n.",
        definition: "扣除；推理，演绎",
        memoryTip: "演绎法→从结果倒推过程→推理，演绎"
    },
    {
        word: "deductible",
        pronunciation: "[dɪˈdʌktəbl]",
        partOfSpeech: "adj.",
        definition: "可抵扣的",
        partOfSpeech2: "n.",
        definition2: "自负额度"
    },
    {
        word: "induce",
        pronunciation: "[ɪnˈdjuːs]",
        partOfSpeech: "v.",
        definition: "诱发；催生",
        memoryTip: "in(向内)+duce(带来)→诱发"
    },
    {
        word: "seduce",
        pronunciation: "[sɪˈdjuːs]",
        partOfSpeech: "v.",
        definition: "诱骗；唆使",
        memoryTip: "se（色）+duce（引导）→声色犬马的诱惑使人堕落"
    },
    {
        word: "trap",
        pronunciation: "[træp]",
        partOfSpeech: "n.",
        definition: "陷阱，圈套",
        partOfSpeech2: "v.",
        definition2: "使进入陷阱；困住"
    },
    {
        word: "produce",
        pronunciation: "[prəˈdjuːs]",
        partOfSpeech: "v.",
        definition: "生产，产生",
        memoryTip: "pro(深入)+duce(带来)→生产，产生"
    },
    {
        word: "product",
        pronunciation: "[ˈprɒdʌkt]",
        partOfSpeech: "n.",
        definition: "产品，制品，产物"
    },
    {
        word: "by-product",
        pronunciation: "[ˈbaɪprɑːdʌkt]",
        partOfSpeech: "n.",
        definition: "副产品，副作用"
    },
    {
        word: "reproduce",
        pronunciation: "[ˌriːprəˈdjuːs]",
        partOfSpeech: "v.",
        definition: "再生产；复制；繁殖，生育",
        memoryTip: "re(反复，重新)+produce(生产)→再生产；复制；繁殖"
    },
    {
        word: "reproducibility",
        pronunciation: "[riprəˌdju:səˈbiliti]",
        partOfSpeech: "n.",
        definition: "可复现性；可再现性"
    },
    {
        word: "productive",
        pronunciation: "[prəˈdʌktɪv]",
        partOfSpeech: "adj.",
        definition: "高产的；高效的，富有成效的",
        memoryTip: "produc(生产)+tive(的)→高产的；高效的",
        isKey: true
    },
    {
        word: "productivity",
        pronunciation: "[ˌprɒdʌkˈtɪvəti]",
        partOfSpeech: "n.",
        definition: "生产力；生产效率，工作效率"
    },
    {
        word: "reduce",
        pronunciation: "[rɪˈdjuːs]",
        partOfSpeech: "v.",
        definition: "减少",
        memoryTip: "re(往回)+duce(引导)→减少",
        usage: [
            "reduce A to B 将A减至B",
            "be reduced to 使陷入"
        ]
    },
    {
        word: "reduction",
        pronunciation: "[rɪˈdʌkʃn]",
        partOfSpeech: "n.",
        definition: "减少"
    },
    {
        word: "lessen",
        pronunciation: "[ˈlesn]",
        partOfSpeech: "v.",
        definition: "减少，使变小",
        memoryTip: "less（更少的）+en（使动后缀）"
    },
    {
        word: "lower",
        pronunciation: "[ˈloʊər,ˈlaʊər]",
        partOfSpeech: "v.",
        definition: "降低，减少"
    },
    {
        word: "fashion",
        pronunciation: "[ˈfæʃn]",
        partOfSpeech: "n.",
        definition: "时髦，时尚；流行",
        partOfSpeech2: "v.",
        definition2: "使成形，塑造"
    },
    {
        word: "fashionable",
        pronunciation: "[ˈfæʃnəbl]",
        partOfSpeech: "adj.",
        definition: "流行的，时髦的"
    },
    {
        word: "otherwise",
        pronunciation: "[ˈʌðəwaɪz]",
        partOfSpeech: "adv.",
        definition: "否则；原本",
        memoryTip: "other(另一个)+wise(智慧)→有另一种可能性的事",
        isKey: true
    },
    {
        word: "likewise",
        pronunciation: "[ˈlaɪkwaɪz]",
        partOfSpeech: "adv.",
        definition: "同样地，类似地"
    },
    {
        word: "alike",
        pronunciation: "[əˈlaɪk]",
        partOfSpeech: "adv.",
        definition: "同样地，类似地；二者都"
    },
    {
        word: "label",
        pronunciation: "[ˈleɪbl]",
        partOfSpeech: "n.",
        definition: "标签；叫法",
        partOfSpeech2: "v.",
        definition2: "贴标签；称作",
        memoryTip: "lab(实验室)+el→化学实验室里要给各种药品贴标签"
    },
    {
        word: "tag",
        pronunciation: "[tæg]",
        partOfSpeech: "n.",
        definition: "标签",
        partOfSpeech2: "v.",
        definition2: "贴标签"
    },
    {
        word: "brand",
        pronunciation: "[brænd]",
        partOfSpeech: "n.",
        definition: "品牌",
        usage: "brand new 崭新的"
    },
    {
        word: "yield",
        pronunciation: "[jiːld]",
        partOfSpeech: "v.",
        definition: "产生，产出；屈服，让步",
        partOfSpeech2: "n.",
        definition2: "产量，产出",
        memoryTip: "地（field）里面产出（yield）粮食",
        isKey: true
    },
    {
        word: "give in",
        partOfSpeech: "phr.",
        definition: "屈服，让步"
    }
];