class GDPR {

    constructor() {
        this.showStatus();
        this.showContent();
        this.bindEvents();
        if (this.cookieStatus() !== 'accept' && this.cookieStatus() !== 'reject') this.showGDPR();
    }

    bindEvents() {
        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            this.cookieStatus('accept');
            this.showStatus();
            this.showContent();
            this.hideGDPR();
            this.saveMeta();
        });

        let buttonDeny = document.querySelector('.gdpr-consent__button--reject');
        buttonDeny.addEventListener('click', () => {
            this.cookieStatus('reject');
            this.showStatus();
            this.showContent();
            this.hideGDPR();
            this.saveMeta();
        });
    }


    showContent() {
        this.resetContent();
        const status = this.cookieStatus() == null ? 'not-chosen' : this.cookieStatus();
        const elementlist = document.querySelectorAll(`.content-gdpr-${status}`);

        elementlist.forEach(element => {
            element.classList.add('show');
        });
    }

    resetContent() {
        const classes = [
            '.content-gdpr-accept',

            '.content-gdpr-reject',

            '.content-gdpr-not-chosen'];

        for (const c of classes) {
            document.querySelector(c)?.classList.add('hide');
            document.querySelector(c)?.classList.remove('show');
        }
    }

    showStatus() {
        this.cookieStatus() == null ? 'Niet gekozen' : this.cookieStatus();
    }

    cookieStatus(status) {
        if (status) localStorage.setItem('gdpr-consent-choice', status);

        //student uitwerking

        return localStorage.getItem('gdpr-consent-choice');
    }


    saveMeta() {
        const status = new Date();
        localStorage.setItem('metadata', status);
    }


    hideGDPR() {
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }

    showGDPR() {
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }
}

const gdpr = new GDPR();

