import OpenLogin from '../components/login/login.component';
import PatientList from '../components/patient-primary/parient-list';

export default [
    {
        path:"/login", 
        name:"Login",
        component:OpenLogin
    },
    {
        path:"/patient",
        name:"Patient Records",
        component:PatientList
    }
]