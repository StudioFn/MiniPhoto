"use strict"; function _slicedToArray(e, t) { return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest() } function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance") } function _iterableToArrayLimit(e, t) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) { var a = [], n = !0, o = !1, r = void 0; try { for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (a.push(l.value), !t || a.length !== t); n = !0); } catch (e) { o = !0, r = e } finally { try { n || null == i.return || i.return() } finally { if (o) throw r } } return a } } function _arrayWithHoles(e) { if (Array.isArray(e)) return e } function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function _defineProperties(e, t) { for (var a = 0; a < t.length; a++) { var n = t[a]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } function _createClass(e, t, a) { return t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), e } var colorTablePng = [4292005375, 4291869688, 4293377761, 4293510353, 4293511877, 4294696635, 4294763955, 4294110130, 4292599730, 4291421896, 4291358172, 4291032304, 4291099135, 4289981695, 4289913087, 4290563327, 4278255616, 4294967295, 4291349719, 4287736831, 4286631167, 4286767359, 4288542207, 4288474854, 4289061317, 4289189541, 4291087232, 4293582464, 4294628481, 4294560400, 4292520095, 4292582835, 4292383694, 4289826804, 4288322287, 4285756389, 4287783664, 4291324090, 4291655061, 4291528313, 4294358372, 4294427471, 4292989005, 4289508941, 4286891905, 4286698926, 4285917148, 4285985279, 4283422207, 4283283455, 4284844799, 4288981692, 4293848814, 4292927712, 4286548129, 4282609919, 4280723455, 4280863487, 4284018431, 4283949524, 4284861596, 4285184870, 4288325158, 4292527654, 4294358569, 4294288706, 4290800476, 4290926462, 4290529195, 4286202092, 4283454447, 4281746420, 4284686057, 4289734556, 4290198119, 4290072895, 4294153761, 4294224131, 4292131840, 4287141376, 4283477836, 4283089803, 4281982157, 4282117119, 4278698495, 4278229247, 4280440831, 4284706445, 4290624957, 4288585374, 4282930553, 4280177140, 4278226171, 4278236159, 4281719037, 4281584320, 4282561404, 4282884163, 4286286080, 4290882560, 4293237507, 4293232670, 4289415481, 4289803614, 4289340558, 4284488664, 4281678309, 4281282515, 4284160194, 4288814971, 4289211729, 4288626480, 4291982873, 4291921922, 4289173248, 4285233408, 4282158648, 4281900904, 4281054383, 4281188603, 4278231295, 4278222069, 4279847654, 4282469485, 4285887861, 4284572001, 4281811037, 4279583704, 4278217967, 4278226943, 4280658169, 4280589726, 4281305941, 4281498926, 4284246272, 4287595264, 4290606850, 4290798869, 4287837480, 4288685893, 4288289642, 4283897005, 4280821958, 4280032439, 4283371144, 4287370314, 4287765297, 4286456602, 4288759565, 4288370433, 4284768256, 4282404096, 4280311323, 4280183091, 4279728002, 4279730165, 4278218751, 4278211046, 4278990527, 4281218126, 4282532418, 4280361249, 4280493886, 4278201565, 4278218239, 4278234111, 4278245119, 4278250158, 4279754084, 4283680768, 4289052416, 4292130816, 4293562624, 4294926889, 4294856496, 4293525602, 4294901930, 4284617157, 4278190293, 4282652671, 4283891957, 4294508757, 4294909797, 4294859325, 4294932777, 4294946816, 4294960384, 4290177309, 4285982208, 4278452086, 4278255558, 4278250239, 4278240511, 4278227455, 4278205951, 4294045676, 4287331680, 4286213716, 4292663503, 4282412799, 4282428415, 4282439679, 4278255615, 4282515438, 4284088242, 4289654889, 4292542308, 4294967064, 4294952e3, 4294937156, 4294864211, 4294921596, 4294656224, 4286660863, 4283585279, 4286614271, 4289429759, 4294738154, 4294936755, 4294942348, 4294947202, 4294957184, 4294967172, 4293656487, 4291491513, 4287692748, 4286709748, 4287496191, 4286572031, 4286632447, 4286619391, 4289635472, 4283385655, 4281872934, 4288450680, 4292928511, 4292341759, 4292211967, 4292738303, 4292606968, 4292868589, 4292801245, 4293783761, 4294571473, 4294964185, 4294699734, 4294304479, 4294435048, 4294170095, 4293122298, 4293124348, 16777215], FLAG = { CONVERT_PROGRESS: 0, CONVERT_FINISHED: 1, ANALYSIS_PROGRESS: 2, ANALYSIS_FINISHED: 3 }, MSG = { SEND_IMAGE_INFO: 0 }, ImageConvert = function () { function a(e, t) { _classCallCheck(this, a), this.cb = t || function () { }, this.ucharColorTable = this.converToUcharTable(e), this.isDither, this.w, this.h, this.indexTable = [], this._count = 0, this.alphaThreshold = 128 } return _createClass(a, [{ key: "setHandleCallBack", value: function (e) { this.cb = e } }, { key: "converImageToIndex8", value: function (e) { var t = e.buffer, a = e.bkColor, n = e.isDither, o = e.width, r = e.height; this.w = o, this.h = r; var l = new Uint8ClampedArray(t); return a && 4 === a.length && this.setImageBackground(l, a), n ? this.toIndexDither(l, this.ucharColorTable, o, r) : this.toIndexNodither(l), this.indexTable } }, { key: "setImageBackground", value: function (e, t) { var a = _slicedToArray(t, 4), n = a[0], o = a[1], r = a[2]; if (!(a[3] < 255)) for (var l = 0; l < e.length; l += 4) { var i = e[l + 3]; e[l] = (n * (255 - i) + i * e[l]) / 255, e[l + 1] = (o * (255 - i) + i * e[l + 1]) / 255, e[l + 2] = (r * (255 - i) + i * e[l + 2]) / 255, e[l + 3] = 255 } } }, { key: "converToUcharTable", value: function (e) { for (var t = [], a = new Uint32Array(e), n = a.buffer, o = 0; o < a.length; o++)t.push(new Uint8ClampedArray(n, 4 * o, 4)); return t } }, { key: "getColorDistance", value: function (e, t) { var a = (e[0] + t[0]) / 2, n = e[0] - t[0], o = e[1] - t[1], r = e[2] - t[2]; return (512 + a) * n * n + o * o * 1024 + (767 - a) * r * r } }, { key: "findSimilarColour", value: function (e, t) { for (var a, n = t[0], o = 0, r = this.getColorDistance(e, t[0]), l = 0; l < t.length - 1; l++)(a = this.getColorDistance(e, t[l])) < r && (r = a, n = t[o = l]); return [n, o] } }, { key: "toIndexNodither", value: function (e) { for (var t, a, n, o, r = 0; r < e.length; r += 4) { this.checkHandleProgress(), e[r + 3] < this.alphaThreshold ? (e[r + 3] = 0, this.indexTable.push(251)) : (t = new Uint8ClampedArray(e.buffer, r, 4), n = (a = _slicedToArray(this.findSimilarColour(t, this.ucharColorTable), 2))[0], o = a[1], e[r] = n[0], e[r + 1] = n[1], e[r + 2] = n[2], e[r + 3] = 255, this.indexTable.push(o)) } this.imageHandleFinished(e.buffer) } }, { key: "imageHandleFinished", value: function (e) { this._count = 0, this.cb({ msg: FLAG.CONVERT_FINISHED, indexTable: this.indexTable, buffer: e }) } }, { key: "checkHandleProgress", value: function () { this._count++, this._count % 1e4 == 0 && this.cb({ msg: FLAG.CONVERT_PROGRESS, progress: (this._count / (this.w * this.h)).toFixed(2) }) } }, { key: "toIndexDither", value: function (a, e, n, t) { for (var o, r, l, i, s, c = function (e, t) { return new Uint8ClampedArray(a.buffer, 4 * e + t * n * 4, 4) }, h = 0; h < t; h++)for (var d = 0; d < n; d++) { this.checkHandleProgress(), o = c(d, h); var b = _slicedToArray(this.findSimilarColour(o, e), 2), u = b[0], f = b[1]; o[3] < this.alphaThreshold ? (this.indexTable.push(251), o[3] = 0) : this.indexTable.push(f), r = o[0] - u[0], l = o[1] - u[1], i = o[2] - u[2], o[0] = u[0], o[1] = u[1], o[2] = u[2], d + 1 < n && ((s = c(d + 1, h))[0] = s[0] + 7 / 16 * r, s[1] = s[1] + 7 / 16 * l, s[2] = s[2] + 7 / 16 * i, h + 1 < t && ((s = c(d + 1, h + 1))[0] = s[0] + 1 / 16 * r, s[1] = s[1] + 1 / 16 * l, s[2] = s[2] + 1 / 16 * i)), h + 1 < t && ((s = c(d, h + 1))[0] = s[0] + 5 / 16 * r, s[1] = s[1] + 5 / 16 * l, s[2] = s[2] + 5 / 16 * i, 0 < d - 1 && ((s = c(d - 1, h + 1))[0] = s[0] + 3 / 16 * r, s[1] = s[1] + 3 / 16 * l, s[2] = s[2] + 3 / 16 * i)) } this.imageHandleFinished(a.buffer) } }, { key: "getIndexTable", value: function () { return this.indexTable } }]), a }(), ImgData2LuaStr = function () { function t(e) { _classCallCheck(this, t), this.indexTable = [], this.cb = e, this.luaStr, this.w, this.h, this.face, this.size, this.speed, this.delay, this.blockid } return _createClass(t, [{ key: "setConvertRules", value: function (e) { this.indexTable = e.indexTable, this.w = e.width, this.h = e.height, this.blockid = e.blockid, this.face = parseInt(e.face), this.size = e.areaSize, this.speed = e.placeSpeed, this.delay = e.areaDelay * e.placeSpeed, this.startAnalysis() } }, { key: "getPlaceBlockStr", value: function (e) { var t; switch (e) { case 1: t = "Block:setBlockAll(x, y + blockData[2], z - blockData[1], blockid + blockColorInfo[2], blockColorInfo[1])"; break; case 2: t = "Block:setBlockAll(x, y + blockData[2], z + blockData[1], blockid + blockColorInfo[2], blockColorInfo[1])"; break; case 3: t = "Block:setBlockAll(x - blockData[1], y + blockData[2], z, blockid + blockColorInfo[2], blockColorInfo[1])"; break; case 4: t = "Block:setBlockAll(x + blockData[1], y + blockData[2], z, blockid + blockColorInfo[2], blockColorInfo[1])"; break; case 11: t = "Block:setBlockAll(x + blockData[2], y, z - blockData[1], blockid + blockColorInfo[2], blockColorInfo[1])"; break; case 12: t = "Block:setBlockAll(x - blockData[2], y, z + blockData[1], blockid + blockColorInfo[2], blockColorInfo[1])"; break; case 13: t = "Block:setBlockAll(x - blockData[1], y, z - blockData[2], blockid + blockColorInfo[2], blockColorInfo[1])"; break; case 14: t = "Block:setBlockAll(x + blockData[1], y, z + blockData[2], blockid + blockColorInfo[2], blockColorInfo[1])" }return t } }, { key: "getPeoplePosStr", value: function (e) { var t; switch (e) { case 1: t = "Player:setPosition(hostId, x - 20, y + 20, z - blockData[1])"; break; case 2: t = "Player:setPosition(hostId, x + 20, y + 20, z + blockData[1])"; break; case 3: t = "Player:setPosition(hostId, x - blockData[1], y + 20, z + 20)"; break; case 4: t = "Player:setPosition(hostId, x + blockData[1], y + 20, z - 20)"; break; case 11: t = "Player:setPosition(hostId, x + blockData[2], y + 20, z - blockData[1])"; break; case 12: t = "Player:setPosition(hostId, x - blockData[2], y + 20, z + blockData[1])"; break; case 13: t = "Player:setPosition(hostId, x - blockData[1], y + 20, z - blockData[2])"; break; case 14: t = "Player:setPosition(hostId, x + blockData[1], y + 20, z + blockData[2])" }return t } }, { key: "startAnalysis", value: function () { this.luaStr = "local blockTable = {{1,1},{1,0},{2,0},{3,0},{4,0},{5,0},{6,0},{7,0},{8,0},{9,0},{10,0},{11,0},{12,0},{13,0},{14,0},{15,0},{3,2},{0,0},{2,2},{1,2},{10,4},{15,1},{14,1},{13,1},{12,1},{11,1},{10,1},{9,1},{8,1},{0,3},{6,1},{5,1},{4,1},{3,1},{2,1},{4,2},{0,6},{6,2},{7,2},{8,2},{9,2},{10,2},{11,2},{12,2},{13,2},{14,2},{15,2},{7,1},{1,3},{2,3},{3,3},{4,3},{5,3},{7,4},{6,4},{5,4},{4,4},{3,4},{2,4},{1,4},{3,13},{15,3},{14,3},{13,3},{12,3},{11,3},{10,3},{9,3},{8,3},{7,3},{6,3},{8,4},{9,4},{0,2},{11,4},{12,4},{13,4},{14,4},{15,4},{3,5},{1,5},{2,5},{0,5},{4,5},{5,5},{6,5},{7,5},{8,5},{0,8},{11,6},{10,6},{9,6},{8,6},{7,6},{6,6},{5,6},{4,6},{3,6},{2,6},{1,6},{5,2},{0,11},{14,5},{13,5},{12,5},{11,5},{10,5},{12,6},{13,6},{14,6},{15,6},{15,8},{1,7},{2,7},{3,7},{4,7},{5,7},{6,7},{7,7},{8,7},{9,7},{10,7},{11,7},{12,7},{13,7},{0,7},{0,12},{13,8},{0,1},{11,8},{10,8},{9,8},{8,8},{0,13},{6,8},{5,8},{4,8},{3,8},{2,8},{1,8},{0,10},{15,7},{0,14},{10,10},{1,9},{2,9},{3,9},{4,9},{5,9},{6,9},{7,9},{8,9},{9,9},{10,9},{11,9},{12,9},{13,9},{14,9},{15,9},{9,5},{1,10},{0,15},{2,11},{1,11},{15,5},{15,10},{14,10},{13,10},{12,10},{11,10},{0,9},{9,10},{8,10},{7,10},{6,10},{5,10},{4,10},{3,10},{2,10},{4,11},{5,11},{6,11},{7,11},{8,11},{9,11},{10,11},{11,11},{12,11},{13,11},{14,11},{15,11},{14,8},{1,12},{2,12},{3,12},{4,12},{5,12},{7,13},{6,13},{5,13},{4,13},{0,4},{2,13},{1,13},{7,8},{15,12},{14,12},{13,12},{12,12},{11,12},{10,12},{9,12},{8,12},{7,12},{6,12},{8,13},{9,13},{10,13},{11,13},{12,13},{13,13},{14,13},{15,13},{14,7},{1,14},{2,14},{3,14},{4,14},{5,14},{6,14},{7,14},{8,14},{9,14},{11,15},{10,15},{9,15},{8,15},{7,15},{6,15},{5,15},{4,15},{3,15},{2,15},{1,15},{12,8},{15,14},{14,14},{13,14},{12,14},{11,14},{10,14}};\n", this.luaStr += "local data = [["; for (var e = 0; e < this.w; e++)for (var t = 0; t < this.h; t++) { var a = (this.indexTable[e + (this.h - t - 1) * this.w] + 1).toString(16); 1 == a.length && (a = "0" + a), this.luaStr += a } this.luaStr += "]]\nlocal blockid, face, w, h, size, speed, delay = ".concat(this.blockid, ", ").concat(this.face, ", ").concat(this.w, ", ").concat(this.h, ", ").concat(this.size, ", ").concat(this.speed, ", ").concat(this.delay, "\nlocal garphic_x, garphic_y, garphic_z, x, y, z, progress = 0, 0, 0, 0, 0, 0, 0\nlocal startGenerator = false\n(function()\n    local rx, ry, lx, ly = 0, 0, 0, 0\n    local _tempData, _data = {}, {}\n    for i = 1, #data, 2 do\n        _data[#_data + 1] = tonumber(string.sub(data, i, i + 1), 16)\n    end\n    rx = w % size\n    ry = h % size\n    if(rx == 0) then rx = size end\n    if(ry == 0) then ry = size end\n    for m = 1, w, size do\n        if (w - m < size) then lx = rx else lx = size end\n        for n = 1, h, size do\n            local matrix = {}\n            if (h - n < size) then ly = ry else ly = size end\n            for i = 1, ly do\n                for j = 1, lx do\n                    matrix[#matrix + 1] = {m + j - 2, n + i - 2, _data[(m + j - 2) * h + n - 1 + i]}\n                end\n            end\n            _tempData[#_tempData + 1] = matrix\n         end\n    end\n    data = _tempData\nend)()\nlocal placeColorBlock = (function()\n    local i1, i2, delayCount, canPlay = 1, 1, 1, true\n    local result, hostId = Player:getHostUin()\n    return function()\n        if(not startGenerator) then return end\n        if(not canPlay) then\n            delayCount = delayCount + 1\n            if(delayCount >= delay) then\n                delayCount = 1\n                canPlay = true\n            end\n            return\n        end\n        local blockDisplay = false\n        while not blockDisplay do\n            local matrix, blockData, blockColorInfo = data[i1]\n            if (i2 > #matrix) then\n                i2 = 1\n                i1 = i1 + 1\n                progress = (i1 * 1.0 / (#data + 1)) * 100\n                Chat:sendSystemMsg(string.format([[完成度%.2f%%]], progress), 0)\n                if (i1 > #data) then\n                    startGenerator = false\n                    i1 = 1\n                    Player:setActionAttrState(0,PLAYERATTR.ENABLE_MOVE,true)\n                    Game:msgBox([[生成完毕！]])\n                    return\n                end\n                matrix = data[i1]\n                blockData = matrix[i2]\n                ").concat(this.getPeoplePosStr(this.face), ";\n                canPlay = false\n                return\n            end\n            matrix = data[i1] \n            blockData = matrix[i2]\n            if(blockData[3] < 252) then\n                blockColorInfo = blockTable[blockData[3]]\n                blockDisplay = true\n                ").concat(this.getPlaceBlockStr(this.face), "\n            else blockDisplay = false end\n            i2 = i2 + 1\n        end\n    end\nend)()\nlocal Game_Update = function()\n    if (not startGenerator) then return end\n    for i = 1, speed do placeColorBlock() end\nend\nlocal Game_AnyPlayer_EnterGame = function(obj)\n    local result, uin = Player:getHostUin()\n    if (obj.eventobjid == uin) then\n        Backpack:setGridItem(uin, 1000, 804, 20, -1)\n        Backpack:setGridItem(uin, 1001, 12253, 2, -1)\n        Chat:sendSystemMsg([[#R摆放#B快捷栏第一个格子方块#R, 将在此方块右上生成像素图]], 0)\n     end\nend\nlocal Block_PlaceBy = function(obj)\n    if (obj.blockid == 804) then\n        garphic_x = obj.x\n        garphic_y = obj.y\n        garphic_z = obj.z\n        local graphicInfo = Graphics:makeGraphicsText([[点击此方块开始创建像素图]], 16, 255, 1001)\n        Graphics:createGraphicsTxtByPos(garphic_x, garphic_y + 1, garphic_z, graphicInfo)\n    end\nend\nlocal Player_ClickBlock = function(obj)\n    if (obj.blockid == 804) then\n        if (startGenerator) then return end\n        Block:destroyBlock(obj.x, obj.y, obj.z, true)\n        Graphics:removeGraphicsByPos(garphic_x, garphic_y + 1, garphic_z, 1001, 1)\n        x = obj.x\n        y = obj.y\n        z = obj.z\n        startGenerator = true\n        Player:setActionAttrState(0,PLAYERATTR.ENABLE_MOVE,false)\n        Game:msgBox([[正在生成像素图中,暂不可移动,等待生成完成即可！]])\n    end\nend\n\nScriptSupportEvent:registerEvent([=[Game.AnyPlayer.EnterGame]=], Game_AnyPlayer_EnterGame)\nScriptSupportEvent:registerEvent([=[Game.Run]=], Game_Update)\nScriptSupportEvent:registerEvent([=[Block.PlaceBy]=], Block_PlaceBy)\nScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], Player_ClickBlock)"), this.cb({ msg: FLAG.ANALYSIS_FINISHED, str: this.luaStr }) } }]), t }(), imgdata2luastr = new ImgData2LuaStr(function (e) { self.postMessage(e) }), imageConvert = new ImageConvert(colorTablePng, function (e) { switch (e.msg) { case FLAG.CONVERT_PROGRESS: self.postMessage({ msg: FLAG.CONVERT_PROGRESS, progress: e.progress }); break; case FLAG.CONVERT_FINISHED: self.postMessage({ msg: FLAG.CONVERT_FINISHED, buffer: e.buffer }, [e.buffer]) } }); function setImage(e) { var t = imageConvert.converImageToIndex8(e); e.indexTable = t, "0" == e.face_v ? e.face = e.face_h : e.face = "1" + e.face_h, imgdata2luastr.setConvertRules(e) } self.onmessage = function (e) { var t = e.data, a = t.msg, n = t.data; switch (a) { case MSG.SEND_IMAGE_INFO: setImage(n) } };