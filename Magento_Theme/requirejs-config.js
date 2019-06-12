var config = {
    paths: {
            'bootstrap':'Magento_Theme/js/bootstrap.bundle.min',
            'slick':'Magento_Theme/js/slick.min',
    } ,
    shim: {
        'bootstrap': {
          'deps': ['jquery']
        },
        'slick': {
          'deps': ['jquery']
        }
    }
};
