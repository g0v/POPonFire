{div, span, i, a, input} = React.DOM

cityList = {
  "臺北市": "臺北市"
  "新北市": "新北市"
  "臺中市": "臺中市"
  "臺南市": "臺南市"
  "高雄市": "高雄市"
  "基隆市": "基隆市"
  "新竹市": "新竹市"
  "嘉義市": "嘉義市"
  "桃園縣": "桃園縣"
  "新竹縣": "新竹縣"
  "苗栗縣": "苗栗縣"
  "彰化縣": "彰化縣"
  "南投縣": "南投縣"
  "雲林縣": "雲林縣"
  "嘉義縣": "嘉義縣"
  "屏東縣": "屏東縣"
  "宜蘭縣": "宜蘭縣"
  "花蓮縣": "花蓮縣"
  "臺東縣": "臺東縣"
  "澎湖縣": "澎湖縣"
  "金門縣": "金門縣"
  "連江縣": "連江縣"
}

devWayList = {
  "標租": "標租"
  "標售": "標售"
  "暫時性使用": "暫時性使用"
  "優先承購": "優先承購"
  "設定地上權": "設定地上權"
  "促進民間參與 (BOT...)": "促進民間參與 (BOT...)"
  "合作開發": "合作開發"
  "參與捷運聯合開發": "參與捷運聯合開發"
  "參與都市更新": "參與都市更新"
  "眷村/營區改建": "眷村/營區改建"
}

unitList = {
  "財政部國有財產署": "財政部國有財產署"
  "國防部": "國防部"
  "台北市政府財政局": "台北市政府財政局"
  "官股銀行": "官股銀行"
  "國營事業": "國營事業"
  "學產地": "學產地"
  "國民黨黨產": "國民黨黨產"
}

class Search
  ->
    @vars = {}
  setCity: (@vars.city) ->
    @run!
  setDevWay: (@vars.devWay) ->
    @run!
  setUnit: (@vars.unit) ->
    @run!
  setKeyword: (@vars.keyword) ->
    @run!
  run: ->
    query = <[ city devWay unit keyword ]>.map ~>
      "#it=#{@vars[it] or ''}"
    .join \&
    searchJSON <~ $.getJSON("/api/search?#query")
    createPieceMap searchJSON

search = new Search!

search.run!

searchLabel = React.createClass do
  render: ->
    div {className: 'ui blue ribbon label'} '檢索'

searchBox = React.createClass do
  handleSearch: ->
    search.run!
  render: ->
    div {},
      div {className: 'ui segment search-box'},
        searchLabel!
        div {id: 'search-bar', className: 'ui compact menu'},
          cityDropdown {onSubmit: @handleSearch}
          devWayDropdown {onSubmit: @handleSearch}
          unitDropdown {onSubmit: @handleSearch}
          queryBox {onSubmit: @handleSearch}

cityDropdown = React.createClass do
  handleSubmit: ->
    search.setCity @refs.city.getDOMNode!.innerText
    @props.onSubmit!
  render: ->
    div {className: 'ui selection dropdown item'},
      div {className: 'text', ref: 'city'} '地點'
      i {className: 'dropdown icon'}
      div {className: 'menu'},
        ...for let city of cityList
          a {className: 'item', onClick: @handleSubmit} city

devWayDropdown = React.createClass do
  handleSubmit: ->
    search.setDevWay @refs.devWay.getDOMNode!.innerText
    @props.onSubmit!
  render: ->
    div {className: 'ui selection dropdown item'},
      div {className: 'text', ref: 'devWay'} '開發方式'
      i {className: 'dropdown icon'}
      div {className: 'menu'},
        ...for let devWay of devWayList
          a {className: 'item', onClick: @handleSubmit} devWay

unitDropdown = React.createClass do
  handleSubmit: ->
    search.setUnit @refs.unit.getDOMNode!.innerText
    @props.onSubmit!
  render: ->
    div {className: 'ui selection dropdown item'},
      div {className: 'text', ref: 'unit'} '經營單位'
      i {className: 'dropdown icon'}
      div {className: 'menu'},
        ...for let unit of unitList
          a {className: 'item', onClick: @handleSubmit} unit

queryBox = React.createClass do
  handleSubmit: ->
    search.setKeyword @refs.keyword.getDOMNode!.value
    @props.onSubmit!
  render: ->
    div {className: 'right compact menu'},
      div {className: 'item'},
        div {className: 'ui icon input'},
          input {type: 'text', id: 'searchKeyword', placeholder: '地名、人名⋯⋯', ref: 'keyword', onChange: @handleSubmit}
          i {className: 'search icon'}

landList = React.createClass do
  render: ->
    div {className: 'ui segment piece-map'}

React.renderComponent searchBox!, document.getElementById('search-box')
