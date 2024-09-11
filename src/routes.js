import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './components/views/HomeView.vue'
import AboutView from './components/views/AboutView.vue'
import ExperinceView from './components/views/ExperinceView.vue';
import EducationView from './components/views/EducationView.vue';
import ProjectView from './components/views/ProjectView.vue';
import ContactView from './components/views/ContactView.vue';
import SkillView from './components/views/SkillView.vue';

const routes=[
{
    name:'HomeView',
    path:'/',
    component:HomeView
},
{
    name:'AboutView',
    path:'/about',
    component:AboutView
},
{
    name:'ExperienceView',
    path:'/experience',
    component:ExperinceView
},
{
    name:'EducationView',
    path:'/education',
    component:EducationView
},
{
    name:'ProjectView',
    path:'/projects',
    component:ProjectView
},
{
    name:'ContactView',
    path:'/contact',
    component:ContactView
},
{
    name:'SkillView',
    path:'/skills',
    component:SkillView
}


];

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;