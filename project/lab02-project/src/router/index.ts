// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentListView from '@/views/StudentListView.vue'
import EventDetailView from '@/views/EventDetailView.vue'

export function createAppRouter(pageLimit: (number | null)[]) {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'event-list-view',
        component: EventListView,
        props: (route) => ({
          page: parseInt((route.query?.page as string) || '1'),
          pageLimit
        })
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
        path: '/student',
        name: 'student',
        component: StudentListView
      },
      {
        path: '/event/:id',
        name: 'event-detail',
        component: EventDetailView,
        props: true
      }
    ]
  })
}
