/// <reference types="cypress" />

import Request from '../requests/requests'

describe('Validar API de Atividades', () => {
    
    it('Consultar atividades cadastradas', () => {
        Request.getAllActivities().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq('OK')
            expect(response.body).to.be.not.null;
        })
    });

    it('Consultar uma atividade cadastrada', () => {
        Request.getAllActivities().then((resGetActivities) => {
            Request.getActivitie(resGetActivities.body[0].id).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq('OK')
                expect(response.body).to.be.not.null;
                expect(response.body).to.have.property('id')
            })
        })
    });

    it('Cadastrar uma nova atividade', () => {
        Request.postActivities().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq('OK')
            expect(response.body.title).to.eq('Caminhar na Chuva')
            expect(response.body).to.have.property('id')
        })
    });

    it('Deletar uma nova atividade', () => {
        Request.postActivities().then((resPostActivitie) => {
            Request.deleteActivitie(resPostActivitie.body.id).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq('OK')
            })
        })
    });

    it('Atualizar uma atividade', () => {
        Request.postActivities().then((resPostActivitie) => {
            Request.putActivitie(resPostActivitie.body.id).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq('OK')
                expect(response.body.id).not.to.eq(resPostActivitie.body.id)
            })
        })
    });

    it('Consultar uma atividade inexistente', () => {
        Request.getActivitie(99).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.title).to.eq('Not Found')
        })
    });

    it('Validar Bad request ao Deletar uma atividade', () => {
        Request.deleteActivitie('invalid').should((response) => {
            expect(response.status).to.eq(400)
            expect(response.statusText).to.eq('Bad Request')
        })
    });

});