export default {
    getCookie(name) {
        let v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return v ? v[2] : null;
    },
    setCookie(name, value) {
        let cook = name + "=" + value + ";path=/";
        document.cookie = cook;
    }
}