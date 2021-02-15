<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        

        <q-toolbar-title>
            <q-icon name="web" color="white" />
          Todo Web Application
        </q-toolbar-title>

       
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab :key="index" v-for="(link,index) in essentialLinks" :to="link.to" :name="link.title"  :icon="link.icon" :label="link.title"/>
        <!-- <q-tab name="setting" icon="settings" label="Settings"/>  -->
      </q-tabs>
    </q-footer>

    <q-drawer :breakpoint="767" :width="200" show-if-above bordered content-class="bg-grey-1">
      <q-list style="margin-top:20px;">
        
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Todo',
    icon: 'list',
    to:'todo'
  },
  {
    title: 'Settings',
  
    icon: 'settings',
    to:'settings'
  },
 
];



export default {
  name: 'Layout',
  components: { EssentialLink },
  data () {
    return {
      essentialLinks: linksData
    }
  }
}
</script>
<style>
@media screen and (min-width: 768px) {
  .q-footer{
    display:none;
  }
}
</style>