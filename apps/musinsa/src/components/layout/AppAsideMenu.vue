<template>
  <nav
    class="fixed top-0 left-0 z-40 w-[280px] h-full min-h-full overflow-y-auto bg-white border-r border-gray-200 shadow-sm sidebar py-[24px] px-[12px]"
  >
    <div class="mb-[20px] flex gap-3 items-center">
      <img src="/images/logo.svg" />
      X
      <div class="w-[100px] bg-[#000] p-[5px]">
        <img src="/images/musinsa.png" />
      </div>
    </div>
    <ul class="sidebar-nav">
      <li v-for="menu in menus" class="border-b-[1px] border-b-[#f2f2f2]">
        <a
          @click="toggleSubMenu(menu)"
          class="block p-[16px] text-[12px] cursor-pointer"
          :class="{
            'bg-[#e6e7ff] rounded-[8px]': menu.active,
          }"
        >
          <i :class="menu.icon" class="w-[1.8em] mr-[5px]"></i>
          <span>{{ menu.name }}</span>
        </a>

        <ul
          v-if="menu.selected && menu.subMenus"
          class="sidebar-nav sidebar-subnav"
        >
          <li v-for="subMenu in menu.subMenus">
            <a
              :href="menu.link + subMenu.link"
              class="block pl-[33px] pr-[12px] py-[8px] text-[12px] cursor-pointer"
            >
              <i :class="subMenu.icon" class="w-[1.8em] mr-[5px]"></i>
              <span>{{ subMenu.name }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const menus = ref([
  {
    adminMenuId: 3,
    sort: 1,
    icon: "fa-solid fa-house",
    name: "빌딩관리",
    link: "/main",
    text: "메인",
    read: true,
    write: true,
    delete: true,
    subMenus: [],
    active: true,
  },
  {
    adminMenuId: 1,
    sort: 2,
    icon: "fa-solid fa-house",
    name: "디지털트윈",
    link: "/unity/digitalTwin",
    text: "메인",
    read: true,
    write: true,
    delete: true,
    subMenus: [],
    active: true,
  },
  {
    adminMenuId: 25,
    sort: 2,
    icon: "fa-solid fa-file-image",
    name: "회사 관리",
    link: "/company/",
    text: "회사 관리",
    read: true,
    write: true,
    delete: true,
    submenu: [],
  },
  {
    adminMenuId: 26,
    sort: 3,
    icon: "fa-solid fa-file-image",
    name: "멤버 관리",
    link: "/member/",
    test: "멤버 관리",
    read: true,
    write: true,
    delete: true,
  },
]);

const toggleSubMenu = (m) => {
  menus.value.forEach((menu) => {
    menu.selected = false;
  });
  m.selected = true;
  if (!m.subMenus || m.subMenus?.length === 0) {
    router.push(m.link);
  }
};

const setActiveMenu = () => {
  menus.value.forEach((menu, index) => {
    menu.active = router.currentRoute.value.path.startsWith(menu.link);
    menu.selected = menu.active;
    if (menu.active) {
      menu.subMenus?.forEach((subMenu) => {
        menu.active = router.currentRoute.value.path.indexOf(subMenu.link) > -1;
      });
    }
  });
};

watch(
  () => router.currentRoute.value.path,
  () => {
    setActiveMenu();
  }
);

onMounted(() => {
  setActiveMenu();
});
</script>
