//状态

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  chosed_man_state: [],  //选中抄送人
  application:{},
  create:{},
  outputdaily:{},  //产出日报
}

const mutations = {
  change_man(state,array){  //抄送人替换
    state.chosed_man_state=array;
  },
  edit_name(state,val){  //申请人姓名
    state.application.name = val;
  },
  edit_email(state,val){  //申请人邮箱
    state.application.email = val;
  },
  edit_phone(state,val){  //申请人手机
    state.application.phone = val;
  },
  edit_department(state,val){  //申请人部门
    state.application.department = val;
  },
  edit_departmentID(state,val){  //申请人部门id
    state.application.department_id = val;
  },
  changeStatus(state,val){  //申请人信息更新
    state.application.has_changed = val;
  },
  edit_organization(state,val){  //组织名称
    state.create.organization = val;
  },
  edit_abbreviation(state,val){  //组织简称
    state.create.abbreviation = val;
  },
  edit_category(state,val){  //组织类型
    state.create.category = val;
  },
  edit_chargeman(state,val){  //联系人
    state.create.chargeman = val;
  },
  edit_tel(state,val){  //手机号码
    state.create.tel = val;
  },
  edit_mail(state,val){  //邮箱
    state.create.email = val;
  },
  edit_address(state,val){  //地址
    state.create.address = val;
  },
  edit_province(state,val){  //省份ID
    state.create.provinceId = val;
  },
  edit_city(state,val){  //城市ID
    state.create.cityId = val;
  },
  edit_area(state,val){  //区域ID
    state.create.areaId = val;
  },
  edit_img(state,val){  //执照
    state.create.img = val;
  },
  edit_status(state,val){  //创新组织信息更新
    state.create.has_changed = val;
  },
  daily_workshop(state,val){  //选择产出日报车间
    state.outputdaily.workshop = val;
  }
}

/*
 const getters = {
 name:function(state){
 return state.count +=100;
 }
 }
 */

export default new Vuex.Store({
  state, mutations
})
