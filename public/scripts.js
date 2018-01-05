function trackClick(site, community) {
    gtag('event', 'click', {
        'event_category': site,
        'event_label': community
    });
};
