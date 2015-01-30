// 更新
(function () {
  var globalSetting = utils.getData('global') || {}
  var rules = utils.getData('rules') || []

  if (!globalSetting.build) {
    // 如果 globalSetting 中没有 build，或者没有 global setting
    // 说明是 1.1.3 版本以及以前
    // 则写入 build，并且升级 ruleList，即将 regex 字段改为 urlType
    globalSetting.build = OWL.build
    rules.forEach(function (rule) {
      rule.urlType = rule.regex ? 'regex' : 'url'
      delete rule.regex
    })
  }

  if (globalSetting.enable === undefined) {
    globalSetting.enable = true
  }

  utils.saveData('global', globalSetting)
  utils.saveData('rules', rules)

}).call(this)