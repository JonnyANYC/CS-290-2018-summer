// Register the listener. DOMContentLoaded listener taken from our Week 4 activity.
document.addEventListener('DOMContentLoaded', jumpToTab);

function jumpToTab() {
    if (window.location.hash && window.location.hash.length > 0 ) {
        // Activate a requested tab. Source: https://getbootstrap.com/docs/4.1/components/navs/#methods
        $('#portfolio-tabs a[href="' + window.location.hash + '"]').tab('show');
    }
}
