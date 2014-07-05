
var config = require('../../config/config');

var cities = {
"臺北市":"臺北市",
"新北市":"新北市",
"臺中市":"臺中市",
"臺南市":"臺南市",
"高雄市":"高雄市",
"基隆市":"基隆市",
"新竹市":"新竹市",
"嘉義市":"嘉義市",
"桃園縣":"桃園縣",
"新竹縣":"新竹縣",
"苗栗縣":"苗栗縣",
"彰化縣":"彰化縣",
"南投縣":"南投縣",
"雲林縣":"雲林縣",
"嘉義縣":"嘉義縣",
"屏東縣":"屏東縣",
"宜蘭縣":"宜蘭縣",
"花蓮縣":"花蓮縣",
"臺東縣":"臺東縣",
"澎湖縣":"澎湖縣",
"金門縣":"金門縣",
"連江縣":"連江縣"
},
devWays = {
"標租":"標租",
"‪‎‪‎標售":"‪‎‪‎標售",
"暫時性使用":"暫時性使用",
"優先承購":"優先承購",
"‎設定地上權":"‎設定地上權",
"促進民間參與 (BOT...)":"促進民間參與 (BOT...)",
"‎合作開發":"‎合作開發",
"參與捷運聯合開發":"參與捷運聯合開發",
"參與都市更新":"參與都市更新",
"眷村/營區改建":"眷村/營區改建"
},
units = {
"財政部國有財產署":"財政部國有財產署",
"國防部":"國防部",
"台北市政府財政局":"台北市政府財政局",
"官股銀行":"官股銀行",
"國營事業":"國營事業",
"學產地":"學產地",
"國民黨黨產":"國民黨黨產"
};

exports.index = function(req, res){
    res.render('index', { 
        title: config.appName, 
        userName: 'Guest', 
        cities: JSON.stringify(cities),
        devWays: JSON.stringify(devWays),
        units: JSON.stringify(units)
    });
};