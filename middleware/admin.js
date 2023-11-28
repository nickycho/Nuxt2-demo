export default function ({ route, redirect, store }) {
    console.log('This route need admin role: ' + route.path);
    redirect('/');
}