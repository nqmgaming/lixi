"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvelopesController = void 0;
const common_1 = require("@nestjs/common");
const envelopes_service_1 = require("./envelopes.service");
let EnvelopesController = class EnvelopesController {
    envelopesService;
    constructor(envelopesService) {
        this.envelopesService = envelopesService;
    }
    async getStatus(token) {
        return this.envelopesService.getStatus(token);
    }
    async claim(token, req) {
        const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
        return this.envelopesService.claim(token, ip);
    }
    async submitRecipientInfo(token, body) {
        return this.envelopesService.submitRecipientInfo(token, body);
    }
};
exports.EnvelopesController = EnvelopesController;
__decorate([
    (0, common_1.Get)(':token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EnvelopesController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Post)(':token/claim'),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EnvelopesController.prototype, "claim", null);
__decorate([
    (0, common_1.Post)(':token/recipient'),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EnvelopesController.prototype, "submitRecipientInfo", null);
exports.EnvelopesController = EnvelopesController = __decorate([
    (0, common_1.Controller)('api/envelopes'),
    __metadata("design:paramtypes", [envelopes_service_1.EnvelopesService])
], EnvelopesController);
//# sourceMappingURL=envelopes.controller.js.map