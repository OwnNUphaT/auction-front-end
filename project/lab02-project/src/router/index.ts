// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentListView from '@/views/StudentListView.vue'
import EventDetailView from '@/views/event/EventDetailView.vue'
import EventEditView from '@/views/event/EventEditView.vue'
import EventRegisterView from '@/views/event/EventRegisterView.vue'
import EventLayoutView from '@/views/event/EventLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'

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
        name: 'event-layout',
        component: EventLayoutView,
        props: true,
        children: [
          {
            path: '',
            name: 'event-detail',
            component: EventDetailView,
            props: true
          },
          {
            path: 'edit',
            name: 'event-edit',
            props: true,
            component: EventEditView
          },
          {
            path: 'register',
            name: 'event-register',
            props: true,
            component: EventRegisterView
          }
        ]
      },
      {
        path: '/event/:id/edit',
        name: 'event-edit',
        props: true,
        component: EventEditView
      },
      {
        path: '/event/:id/register',
        name: 'event-register',
        props: true,
        component: EventRegisterView
      },
      {
        path: '/404/:resource',
        name: '404-resource',
        component: NotFoundView,
        props: true
      },
      {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView
      },
      {
        path: '/network-error',
        name: 'network-error',
        component: NetworkErrorView
      }
    ]
  })
}
