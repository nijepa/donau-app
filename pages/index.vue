<template>
  <section class="">
    <h1>{{ $nuxt.$fire.auth.currentUser.email }}</h1>
    <button @click="signout"><div>signout</div></button>

    <ul>
    <li
      class="menu-padding padding-top"
      v-for="data in getAllMenu"
      :key="data.id"
    >
      <input type="checkbox" :value="data.id" @change="select(data.id, index)" />
      <label>{{ data.menu_name }}</label>
      <ul class="padding-left" >
        <li v-for="data_child in data.child" :key="data_child.id">
          <input type="checkbox" :value="data_child.id" @change="selectChild(data.id, data_child.id)" />
          <label>{{ data_child.menu_name }} - {{ data_child.id }}</label>
        </li>
      </ul>
    </li>
  </ul>
  </section>
</template>

<script>
export default {
    data() {
    return {
      getAllMenu: [{
        id: 266,
        "parent_id": 0,
        menu_name: "Server && DB Info",
        "menu_url": "#",
        "menu_icon": "fa fa-database",
        "order_by": 6,
        "has_child": 1,
        child: [
          {
            id: 269,
            "parent_id": 266,
            menu_name: "Client",
            "menu_url": "/server_and_db_info/client",
            "menu_icon": null,
            "order_by": 7,
            "has_child": 0,
            "child": []
          },
          {
            id: 268,
            "parent_id": 266,
            menu_name: "VPN",
            "menu_url": "/server_and_db_info/vpn",
            "menu_icon": null,
            "order_by": 8,
            "has_child": 0,
            "child": []
          },
          {
            id: 262,
            "parent_id": 266,
            menu_name: "Server",
            "menu_url": "/server_and_db_info/server",
            "menu_icon": "",
            "order_by": 9,
            "has_child": 0,
            "child": []
          },
          {
            "id": 267,
            "parent_id": 266,
            "menu_name": "Database",
            "menu_url": "/server_and_db_info/database",
            "menu_icon": null,
            "order_by": 10,
            "has_child": 0,
            "child": []
          },
          {
            "id": 271,
            "parent_id": 266,
            "menu_name": "Domain",
            "menu_url": "/server_and_db_info/domain",
            "menu_icon": null,
            "order_by": 15,
            "has_child": 0,
            "child": []
          }
        ]
      }],
      selectedMenu: null
    }
  },
  methods: {
    signout() {
      $nuxt.$fire.auth.signOut()
    },
    select() {
    
    },
    selectChild() {
    
    }
  }
}
</script>
