const POSTActivitie = require('../payloads/new-activitie.json')
const PUT_json = require('../payloads/put-activitie.json')

class requests {

    deleteActivitie(id) {
        return cy.request({
            method: "DELETE",
            url: `Activities/${id}`,
            failOnStatusCode: false
        })
    };

    getActivitie(param) {
        return cy.request({
            method: "GET",
            url: `Activities/${param}`,
            failOnStatusCode: false,
        })
    };

    getAllActivities() {
        return cy.request({
            method: 'GET',
            url: 'Activities',
            failOnStatusCode: false,
        })
    };

    postActivities() {
        return cy.request({
            method: 'POST',
            url: 'Activities',
            failOnStatusCode: false,
            body: POSTActivitie
        })
    };

    putActivitie(id) {
        return cy.request({
            method: "PUT",
            url: `Activities/${id}`,
            failOnStatusCode: false,
            body: PUT_json
        })
    }

}

export default new requests();