class PhotoBooth {
    constructor() {
        this.video = document.getElementById('video');
        this.canvas = document.getElementById('canvas');
        this.filterOverlay = document.getElementById('filterOverlay');
        this.captureBtn = document.getElementById('captureBtn');
        this.photoGrid = document.getElementById('photoGrid');
        this.collageCanvas = document.getElementById('collageCanvas');
        this.photos = [];
        this.currentFilter = 'vintage';
        this.collageSlots = {};
        
        this.init();
    }

    async
