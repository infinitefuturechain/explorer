const zh = {
  global: {
    noneData: '暂无数据',
    loadMore: '点击查看更多',
    notFound: '404',
    pageNotFound: '对不起，页面没找到',
    backPage: '返回',
    homePage: '首页',
    browser: '浏览器',
  },
  home: {
    blockHeight: '区块高度',
    txTotal: '交易总量',
    activeValidators: '节点数',
    block: '区块',
    viewAll: '查看全部',
    tx: '交易',
    charity: '公益链',
  },
  block: {
    height: '高度',
    txn: '交易条数',
    validators: '验证人',
    votingPower: '权重',
    timestamp: '时间',
    blockInformation: '区块详情',
    hash: '区块Hash',
    transactionsNumber: '交易数量',
    proposerAddress: '提议人',
    lastBlock: '最新区块',
    lastBlockHash: '最新区块哈希',
    age: '块龄',
    superNode: '超级节点',
  },
  validator: {
    validators: '超级节点',
    alliances: '联盟节点',
    bonded: '已质押',
    unBonded: '未质押',
    unBonding: '赎回中',
    active: '是否活跃',
    operatorAddress: '节点地址',
    name: '节点名称',
    votingPower: '投票权益',
    ranking: '排名',
    unBondingHeight: '赎回块高度',
    validator: '验证人',
    validatorProfile: '验证人信息',
    details: '详情',
    unBondingTime: '赎回时间',
    currentStatus: '当前状态',
    website: '网站',
    identity: '身份',
    comissionRate: '佣金率',
    jailed: '禁用',
    totalBlocks: '总出块数',
  },
  proposals: {
    proposer: '提案人',
    proposals: '提案',
    title: '标题',
    type: '类型',
    status: '状态',
    submitTime: '提交时间',
    detail: '提案详情',
    depositEndTime: '存款截止时间',
    totalDeposit: '存款总量',
    content: '提案内容',
    description: '描述',
    votingStatus: '投票状态',
    votingStartTime: '投票开始时间',
    votingEndTime: '投票截止时间',
    votingResult: '投票结果',
    voter: '链上治理账户',
    owner: '机构管理人账户',
    supervisor: '链上监管账户',
    validator: '记账节点账户',
    name: '机构名称',
    category: '机构类别',
    level: '机构级别',
    votes: '投票权重',
    roles: '链上权限',
    logo_url: 'Logo',
    node_ip: '节点IP',
    node_id: '节点ID',
    ext_address: '激活账户',
    parent_id: '所属机构ID',
    applyInstructions: '申请上链说明',
  },
  menu: {
    tx: '交易',
    blocks: '区块',
    transfers: '转账',
    record: '存证',
    contract: '合约',
    proposals: '提案',
    validators: '超级节点',
    charityRecord: '公益存证',
    joinUs: '加入我们',
    alliance: '联盟机构',
  },
  tx: {
    time: '时间',
    tx: '交易哈希',
    block: '区块',
    action: '交易类型',
    gas: 'Gas费用',
    memo: '备注',
    sender: '操作者账户',
    detail: '交易详细信息',
    total: '最近100块内交易总量',
    endTime: '结束时间',
    totalTxs: '总交易条数',
    prohibit: '禁用账户',
    enable: '启用账户',
    Target: '目标账户',
    allow: 'Allow',
    exchangeFrom: 'Exchange From',
    erc20TxHash: 'erc20交易哈希',
    ethTxHash: 'eth交易哈希',
    erc20Address: 'erc20地址',
    to: '目标地址',
    channel: 'Channel'
  },
  txCate: {
    all: '所有交易',
    bank: '转账',
    migrate: '迁移',
    governance: '提案',
    staking: '权益质押',
    distribution: "DISTRIBUTION",
    grid999: "GRID999"
  },
  send: {
    from: '发送方',
    to: '接收方',
    amount: '数量',
  },
  record: {
    publicRecord: '公示存证',
    authorRecord: '授权存证',
    fileRecord: '文件存证',
    name: '名称',
    author: '作者',
    orgName: '机构名称',
    orgDescription: '机构描述',
    orgLogoUrl: '机构 Logo',
    recordCode: '存证编码',
    recordType: '存证类型',
    description: '描述',
    businessDataHash: '存证Hash',
    businessData: '存证数据',
    encryptData: '密文数据',
    encryptDataPubKey: '国密公钥',
    encryptDataPrivateKey: '国密私钥',
    chainTime: '上链时间',
    recordId: '存证ID',
    orgId: '机构ID',
    owner: '机构管理人',
    voter: '链上治理账户',
    supervisor: '链上监管账户',
    validator: '记账节点账户',
    votes: '投票权重值',
    preAuthAddress: '预授权地址',
    preAuthAddressKey: '数据查看者秘钥密文',
    encryptDataKey: '原文私钥密文',
    senderKey: '发布者公钥',
    recordInformation: '存证信息',
    fileMd5: '文件 md5',
  },
  activateAccount: {
    address: '激活地址',
    moduleRoles: '功能模块权限',
    extRoles: '机构自定义权限',
  },
  genesis: {
    address: '地址',
  },
  editOrg: {
    id: '机构ID',
    nodeId: '节点ID',
    nodeIp: '节点IP',
  },
  contract: {
    contractTx: '合约交易',
    id: 'ID',
    time: '交易时间',
    contractAddress: '合约地址',
    method: '方法',
    params: '参数',
    recipient: '接收者',
    fromAddress: '注入账户',
    name: '名称',
    addressDetail: '合约地址信息',
  },
  apply: {
    forbidSubmit: '您当前的IP地址: {ip} 暂无提交上链申请资格，请联系商务开通权限。+86 156-1891-6881',
    applyInstructions: '申请上链说明',
    applyInstructionsTest: '请填写数据及业务需要上链的说明，或者需要申请数据全节点的说明',
    orgName: '机构名称',
    orgNameTest: '请填写机构名称',
    level: '机构级别',
    levelUnion: '联盟级',
    levelSpecial: '特邀联盟级',
    levelGenesis: '创世联盟级',
    levelSupervise: '监管联盟级',
    logo: '机构LOGO地址',
    logoTest: '请填写机构LOGO的URL',
    orgDes: '机构描述',
    orgDesTest: '请填写机构详细的介绍描述',
    orgType: '机构类别',
    dataSync: '数据同步机构',
    dataSyncTest: '数据同步机构主要用来同步网络数据，不可在链上开展业务',
    businessService: '业务服务机构',
    businessServiceTest: '业务服务机构可同步网络数据，也可在链上根据申请的权限开展业务',
    basicPermission: '基础权限',
    businessOnchain: '业务上链',
    dataOnChain: '数据上链',
    extendedPermissions: '扩展权限',
    assetIssuancePermission: '资产发行权限',
    supervisionPermission: '监管权限',
    accountingPermission: '记账权限',
    governanceProposalVotingPermission: '治理提案投票权限',
    agencyManagerAccount: '机构管理人账户',
    agencyManagerAccountTest: '请填写机构管理人账户',
    agencyManagerAccountTest2: '机构管理人账户用于管理机构内成员（激活，禁用，分配权限等）及其他业务管理，若没有账户地址，可点此',
    create: '创建',
    supervisionAccount: '链上监管账户',
    supervisionAccountTest: '监管账户用于链上监管（机构吊销，节点禁连，账户禁用，业务管控），若没有账户地址，可点此',
    nodeAccount: '记账节点账户',
    nodeAccountTest: '记账节点账户用于在机构数据节点启动后创建记账人使用，若没有账户地址，可点此',
    governanceAccount: '链上治理账户',
    governanceAccountTest: '链上治理账户是链上治理委员会成员，用于链上提案投票使用，若没有账户地址，可点此',
    voting: '投票权重值',
    selfBuiltNode: '自建节点',
    nodeIp: '机构节点IP',
    nodeIpTest: '如自建节点则必须填写，即节点服务器的IP地址，多个IP地址用","隔开',
    nodeId: '机构节点ID',
    nodeIdTest: '如自建节点则必须填写，即节点服务器的ID，可通过使用 hashgardrad tendermint show-node-id 命令查询获得',
    activateAccount: '激活账户',
    activateAccountTest: '申请机构的同时激活一批机构内账户，多个账户用’,‘隔开，后续也可以在管理后台激活和禁用',
    yes: '是',
    no: '否',
    submit: '提交',
    parentId: '所属机构ID',
    parentIdInfo: '填写所属上级机构ID，若无上级机构则无需填写',
    supervisorOrg: '监管机构',
    accountingOrg: '记账机构',
  },
  alliance: {
    title: '联盟机构',
    name: '机构名称',
    orgId: '机构ID',
    parentId: '所属机构ID',
    info: '联盟机构信息',
    level: '机构级别',
    category: '机构分类',
    manager: '机构管理人账户',
    voter: '链上治理账户',
    supervisor: '链上监管账户',
    validator: '记账节点账户',
    activateAccount: '激活账户',
    nodeId: '机构节点ID',
    extendedPermissions: '扩展权限',
    voting: '投票权重值',
    description: '机构描述',
  },
  time: {
    second: '秒前',
    minute: '分钟前',
    hour: '小时前',
    day: '天前'
  }
};

export default zh;
