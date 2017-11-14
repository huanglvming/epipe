import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = r => require.ensure([], () => r(require('@/page/home/home.vue')), 'group-foo')
const Work = r => require.ensure([], () => r(require('@/page/work/work.vue')), 'group-foo')
const Find = r => require.ensure([], () => r(require('@/page/find/find.vue')), 'group-foo')
const User = r => require.ensure([], () => r(require('@/page/user/user.vue')), 'group-foo')
const Record = r => require.ensure([], () => r(require('@/page/work/record.vue')), 'group-foo')
const Total = r => require.ensure([], () => r(require('@/page/work/total.vue')), 'group-foo')
const Exhibition = r => require.ensure([], () => r(require('@/page/home/exhibition.vue')), 'group-foo')
const Tender = r => require.ensure([], () => r(require('@/page/home/tender.vue')), 'group-foo')
const Supply = r => require.ensure([], () => r(require('@/page/home/supply.vue')), 'group-foo')
const Newsdetail = r => require.ensure([], () => r(require('@/page/home/newsdetail.vue')), 'group-foo')
const Nologin = r => require.ensure([], () => r(require('@/page/work/nologin.vue')), 'group-foo')
const Agreement = r => require.ensure([], () => r(require('@/page/user/registertext.vue')), 'group-foo')
const Registertext = r => require.ensure([], () => r(require('@/page/user/agreement.vue')), 'group-foo')
const Help = r => require.ensure([], () => r(require('@/page/user/help.vue')), 'group-foo')
const Footprint = r => require.ensure([], () => r(require('@/page/work/footprint.vue')), 'group-foo')
const Checkmap = r => require.ensure([], () => r(require('@/page/work/checkmap.vue')), 'group-foo')
const Journal = r => require.ensure([], () => r(require('@/page/work/journal.vue')), 'group-foo')
const Imchoice = r => require.ensure([], () => r(require('@/page/work/imchoice.vue')), 'group-foo')
const Daynews = r => require.ensure([], () => r(require('@/page/work/daynews.vue')), 'group-foo')
const Weeknews = r => require.ensure([], () => r(require('@/page/work/weeknews.vue')), 'group-foo')
const Monthnews = r => require.ensure([], () => r(require('@/page/work/monthnews.vue')), 'group-foo')
const Journaldetail = r => require.ensure([], () => r(require('@/page/work/Journaldetail.vue')), 'group-foo')
const Application = r => require.ensure([], () => r(require('@/page/work/application.vue')), 'group-foo')
const Edit = r => require.ensure([], () => r(require('@/page/work/edit.vue')), 'group-foo')
const Create = r => require.ensure([], () => r(require('@/page/work/create.vue')), 'group-foo')
const Search = r => require.ensure([], () => r(require('@/page/work/search.vue')), 'group-foo')
const Pending = r => require.ensure([], () => r(require('@/page/work/pending.vue')), 'group-foo')
const Department = r => require.ensure([], () => r(require('@/page/work/department.vue')), 'group-foo')
const OutputLive = r => require.ensure([], () => r(require('@/page/work/OutputLive.vue')), 'group-foo')
const OutputDaily = r => require.ensure([], () => r(require('@/page/work/OutputDaily.vue')), 'group-foo')
const EarlyList = r => require.ensure([], () => r(require('@/page/work/enterprise/EarlyList.vue')), 'group-foo')
const LateList = r => require.ensure([], () => r(require('@/page/work/enterprise/LateList.vue')), 'group-foo')
const NotClocking = r => require.ensure([], () => r(require('@/page/work/enterprise/NotClocking.vue')), 'group-foo')
const DailyReport = r => require.ensure([], () => r(require('@/page/work/enterprise/DailyReport.vue')), 'group-foo')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home //首页
    }, {
      path: '/work',
      component: Work //工作台
    }, {
      path: '/find',
      component: Find  //发现
    }, {
      path: '/user',
      component: User  //用户中心
    }, {
      path: '/record',
      component: Record  //考勤记录
    }, {
      path: '/total',
      component: Total  //考勤统计
    }, {
      path: '/exhibition',
      component: Exhibition  //展会
    },
    {
      path: '/supply',
      component: Supply  //供需
    },
    {
      path: '/tender',
      component: Tender  //招投标
    },
    {
      path: '/newsdetail',
      component: Newsdetail  //详情
    },
    {
      path: '/nologin',
      component: Nologin  //未登录页面
    },
    {
      path: '/agreement',  //隐私保护政策
      component: Agreement
    },
    {
      path: '/registertext',  //用户协议
      component: Registertext
    },
    {
      path: '/footprint',
      component: Footprint  //足迹
    },
    {
      path: '/checkmap',
      component: Checkmap //足迹详情
    },
    {
      path: '/help',
      component: Help //帮助
    },
    {
      path: '/journal',
      component: Journal  //日志列表
    },
    {
      path: '/imchoice',
      component: Imchoice  //选择联系人
    },
    {
      path: '/daynews',
      component: Daynews,  //日报
      meta: {keepAlive: true}
    },
    {
      path: '/weeknews',
      component: Weeknews, //周报
      meta: {keepAlive: true}
    },
    {
      path: '/monthnews',
      component: Monthnews,  //月报
      meta: {keepAlive: true}
    },
    {
      path: '/journaldetail',  //日志详情
      component: Journaldetail
    },
    {
      path: '/application',  //申请加入组织
      component: Application
    },
    {
      path: '/create',  //创建组织
      component: Create
    },
    {
      path: '/edit',  //编辑模板页面
      component: Edit
    },
    {
      path: '/search',  //搜索组织
      component: Search,
    },
    {
      path: '/pending',  //等待审核
      component: Pending,
    },
    {
      path: '/department',  //选择部门
      component: Department,
    },
    {
      path: '/outputlive',  //产出看板
      component: OutputLive,
    },
    {
      path: '/outputdaily',  //产出看板
      component: OutputDaily,
    },
    {
      path: '/earlylist',  //早到榜
      component: EarlyList,
    },
    {
      path: '/notclocking',  //未打卡
      component: NotClocking,
    },
    {
      path: '/latelist',  //迟到榜
      component: LateList,
    },
    {
      path: '/dailyreport',  //企业日报
      component: DailyReport,
    },
  ]
})
