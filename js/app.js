"use strict";
Vue.prototype.$window = void 0;
var FLAG = {
    CONVERT_PROGRESS: 0,
    CONVERT_FINISHED: 1,
    ANALYSIS_PROGRESS: 2,
    ANALYSIS_FINISHED: 3,
  },
  MSG = { SEND_IMAGE_INFO: 0 },
  app = new Vue({
    mounted: function () {
      var e = this,
        t = new Blob([document.querySelector("#worker").textContent]),
        s = window.URL.createObjectURL(t);
      (this.worker = new Worker(s)),
        (this.worker.onmessage = this.handleWorkerMsg),
        new ClipboardJS("#copystr", {
          text: function () {
            return e.luastr;
          },
        });
    },
    el: "#app",
    data: {
      worker: null,
      colortable: [
        4292005375, 4291869688, 4293377761, 4293510353, 4293511877, 4294696635,
        4294763955, 4294110130, 4292599730, 4291421896, 4291358172, 4291032304,
        4291099135, 4289981695, 4289913087, 4290563327, 4278255616, 4294967295,
        4291349719, 4287736831, 4286631167, 4286767359, 4288542207, 4288474854,
        4289061317, 4289189541, 4291087232, 4293582464, 4294628481, 4294560400,
        4292520095, 4292582835, 4292383694, 4289826804, 4288322287, 4285756389,
        4287783664, 4291324090, 4291655061, 4291528313, 4294358372, 4294427471,
        4292989005, 4289508941, 4286891905, 4286698926, 4285917148, 4285985279,
        4283422207, 4283283455, 4284844799, 4288981692, 4293848814, 4292927712,
        4286548129, 4282609919, 4280723455, 4280863487, 4284018431, 4283949524,
        4284861596, 4285184870, 4288325158, 4292527654, 4294358569, 4294288706,
        4290800476, 4290926462, 4290529195, 4286202092, 4283454447, 4281746420,
        4284686057, 4289734556, 4290198119, 4290072895, 4294153761, 4294224131,
        4292131840, 4287141376, 4283477836, 4283089803, 4281982157, 4282117119,
        4278698495, 4278229247, 4280440831, 4284706445, 4290624957, 4288585374,
        4282930553, 4280177140, 4278226171, 4278236159, 4281719037, 4281584320,
        4282561404, 4282884163, 4286286080, 4290882560, 4293237507, 4293232670,
        4289415481, 4289803614, 4289340558, 4284488664, 4281678309, 4281282515,
        4284160194, 4288814971, 4289211729, 4288626480, 4291982873, 4291921922,
        4289173248, 4285233408, 4282158648, 4281900904, 4281054383, 4281188603,
        4278231295, 4278222069, 4279847654, 4282469485, 4285887861, 4284572001,
        4281811037, 4279583704, 4278217967, 4278226943, 4280658169, 4280589726,
        4281305941, 4281498926, 4284246272, 4287595264, 4290606850, 4290798869,
        4287837480, 4288685893, 4288289642, 4283897005, 4280821958, 4280032439,
        4283371144, 4287370314, 4287765297, 4286456602, 4288759565, 4288370433,
        4284768256, 4282404096, 4280311323, 4280183091, 4279728002, 4279730165,
        4278218751, 4278211046, 4278990527, 4281218126, 4282532418, 4280361249,
        4280493886, 4278201565, 4278218239, 4278234111, 4278245119, 4278250158,
        4279754084, 4283680768, 4289052416, 4292130816, 4293562624, 4294926889,
        4294856496, 4293525602, 4294901930, 4284617157, 4278190293, 4282652671,
        4283891957, 4294508757, 4294909797, 4294859325, 4294932777, 4294946816,
        4294960384, 4290177309, 4285982208, 4278452086, 4278255558, 4278250239,
        4278240511, 4278227455, 4278205951, 4294045676, 4287331680, 4286213716,
        4292663503, 4282412799, 4282428415, 4282439679, 4278255615, 4282515438,
        4284088242, 4289654889, 4292542308, 4294967064, 4294952e3, 4294937156,
        4294864211, 4294921596, 4294656224, 4286660863, 4283585279, 4286614271,
        4289429759, 4294738154, 4294936755, 4294942348, 4294947202, 4294957184,
        4294967172, 4293656487, 4291491513, 4287692748, 4286709748, 4287496191,
        4286572031, 4286632447, 4286619391, 4289635472, 4283385655, 4281872934,
        4288450680, 4292928511, 4292341759, 4292211967, 4292738303, 4292606968,
        4292868589, 4292801245, 4293783761, 4294571473, 4294964185, 4294699734,
        4294304479, 4294435048, 4294170095, 4293122298, 4293124348, 16777215,
      ],
      tipStr: "将图片拖拽到这里上传",
      isdorpin: !1,
      timer: null,
      imageBase64Data: "",
      srcImageWidth: 0,
      srcImageHeight: 0,
      destImgWidth: 0,
      destImgHeight: 0,
      lockWH: !0,
      wh_ratio: 0,
      face_v: "0",
      face_h: "1",
      areaSize: 20,
      areaDelay: 10,
      placeSpeed: 10,
      blockid: 667,
      isDither: !1,
      showColorPicker: !1,
      bkColor: "",
      destImageBase64Data: "",
      progress: 0,
      progressTip: "",
      showProgress: !1,
      luastr: "",
      isShowCode: !1,
      blockInfo: [
        { label: "667 - 硬沙块", id: 667 },
        { label: "600 - 棉花块", id: 600 },
        { label: "633 - 玻璃块", id: 633 },
        { label: "650 - 玻璃片", id: 650 },
        { label: "616 - 地毡", id: 616 },
        { label: "1120 - 铁块", id: 1120 },
      ],
    },
    methods: {
      checkInDropBox: function (e, t) {
        (e.target !== this.$refs.dropbox &&
          e.target !== this.$refs["drop-tip-box"]) ||
          (this.tipStr = (this.isdorpin = t)
            ? "松开鼠标左键即可上传"
            : "将图片拖拽到这里上传");
      },
      dropfile: function (e) {
        var t = e.dataTransfer.files[0];
        if (t) {
          if (-1 === t.type.indexOf("image"))
            return (
              (this.tipStr = "将图片拖拽到这里上传"),
              (this.isdorpin = !1),
              void this.showErrorMsg("错误,请选择图片文件上传！")
            );
          this.$refs["drop-tip-box"].style.display = "none";
          var s = new FileReader();
          (s.onload = this.showSrcImage), s.readAsDataURL(t);
        }
      },
      showSrcImage: function (e) {
        this.imageBase64Data = e.target.result;
      },
      handleUploadFile: function (e) {
        this.dropfile({ dataTransfer: { files: e.target.files } });
      },
      readFile: function (e) {
        var t = e.target.result;
        t && ((this.imageBuffer = t), this.showSrcImage(t));
      },
      showErrorMsg: function (e) {
        var t = document.createElement("div");
        (t.className = "error-msg-on error-msg"),
          (t.innerText = e),
          document.body.append(t),
          setTimeout(function () {
            t.classList.remove("error-msg-on"),
              setTimeout(function () {
                t.parentNode.removeChild(t);
              }, 1e3);
          }, 3e3);
      },
      imgload: function (e) {
        e.target;
        var t = e.target,
          s = t.width,
          i = t.height;
        (this.wh_ratio = s / i),
          (this.srcImageWidth = s),
          (this.srcImageHeight = i),
          (this.destImgHeight = i < 256 ? i : 256),
          (this.destImgWidth = parseInt(this.destImgHeight * this.wh_ratio));
      },
      selectBkColor: function (e) {
        var t,
          s,
          i,
          o,
          r = e.toString(16);
        r.length < 8
          ? (this.bkColor = "rgba(0,0,0,0)")
          : ((t = r[0] + r[1]),
            (s = r[2] + r[3]),
            (i = r[4] + r[5]),
            (o = r[6] + r[7]),
            (this.bkColor = "rgba("
              .concat(parseInt(o, 16), ",")
              .concat(parseInt(i, 16), ",")
              .concat(parseInt(s, 16), ",")
              .concat(parseInt(t, 16), ")"))),
          console.log(this.bkColor);
      },
      closeColorPicker: function () {
        this.showColorPicker = !1;
      },
      inputImageWidth: function (e) {
        (this.destImgWidth = Number(e)),
          this.lockWH && (this.destImgHeight = parseInt(e / this.wh_ratio));
      },
      inputImageHeight: function (e) {
        (this.destImgHeight = Number(e)),
          this.lockWH && (this.destImgWidth = parseInt(e * this.wh_ratio));
      },
      handleWorkerMsg: function (e) {
        var t = e.data;
        switch (t.msg) {
          case FLAG.CONVERT_FINISHED:
            (this.imageBase64Data = this.arrayBufferToBase64(
              t.buffer,
              this.destImgWidth,
              this.destImgHeight
            )),
              (this.progress = 100),
              (this.progressTip = "转换进度100%, 正在生成");
            break;
          case FLAG.CONVERT_PROGRESS:
            (this.progress = parseInt(100 * t.progress)),
              (this.progressTip = "转换进度".concat(this.progress, "%,"));
            break;
          case FLAG.ANALYSIS_FINISHED:
            (this.progressTip = "生成脚本成功"),
              (this.luastr = t.str),
              (this.$refs.textarea.value = this.luastr);
        }
      },
      beginAnalysis: function () {
        var t = this;
        this.base64ToUint8Array(this.imageBase64Data)
          .then(function (e) {
            return e instanceof ArrayBuffer
              ? ((t.progress = 0),
                (t.showProgress = !0),
                void t.worker.postMessage(
                  {
                    msg: MSG.SEND_IMAGE_INFO,
                    data: {
                      buffer: e,
                      width: t.destImgWidth,
                      height: t.destImgHeight,
                      isDither: t.isDither,
                      blockid: t.blockid,
                      face_v: t.face_v,
                      face_h: t.face_h,
                      areaSize: t.areaSize,
                      areaDelay: t.areaDelay,
                      placeSpeed: t.placeSpeed,
                      bkColor: (function () {
                        if (t.bkColor) {
                          var e = t.bkColor
                            .match(/[0-9,]+(?=\))/)[0]
                            .split(",");
                          return e.length < 4
                            ? []
                            : e.map(function (e) {
                                return Number(e);
                              });
                        }
                        return [];
                      })(),
                    },
                  },
                  [e]
                ))
              : (console.log(e), void t.showErrorMsg(e));
          })
          .catch(function (e) {
            console.log(e);
          });
      },
      base64ToUint8Array: function (t) {
        var r = this;
        return new Promise(function (s) {
          var e = new Image();
          e.src = t;
          var i = r.destImgWidth,
            o = r.destImgHeight;
          (e.onload = function () {
            var e = document.createElement("canvas");
            (e.width = i), (e.height = o);
            var t = e.getContext("2d");
            t.drawImage(this, 0, 0, i, o),
              s(t.getImageData(0, 0, i, o).data.buffer);
          }),
            (e.onerror = function (e) {
              s("图片无法加载或者未上传");
            });
        });
      },
      arrayBufferToBase64: function (e, t, s) {
        var i = document.createElement("canvas");
        (i.width = t), (i.height = s);
        var o = i.getContext("2d"),
          r = new ImageData(new Uint8ClampedArray(e), t, s);
        return o.putImageData(r, 0, 0), i.toDataURL("image/png", 1);
      },
    },
    watch: {
      lockWH: function (e) {
        e && (this.wh_ratio = this.destImgWidth / this.destImgHeight);
      },
    },
    computed: {},
    components: {
      elCheckbox: {
        template:
          "\n            <label class='el-checkbox' >\n            <input type='checkbox' :checked='passValue' @change=\"$emit('change', $event.target.checked)\">\n            <span><slot></slot></span>\n            </label>",
        model: { prop: "passValue", event: "change" },
        props: ["passValue"],
      },
      elInputBox: {
        template:
          "\n            <label class='el-input-box'>\n            <span><slot></slot></span>\n            <input type='text' class='el-input' :value='value' @change=\"$emit('change', $event.target.value)\" @input='$emit(\"input\", $event.target.value)'>\n            </label>\n            ",
        model: { prop: "value", event: "change" },
        props: ["value"],
      },
      elRadiobox: {
        template:
          "\n            <label class='el-radiobox' >\n            <input type='radio' :checked='passValue == value' @change=\"$emit('change', value)\" :name='name'>\n            <span><slot></slot></span>\n            </label>",
        model: { prop: "passValue", event: "change" },
        props: ["name", "passValue", "value"],
      },
      elSelect: {
        template:
          "\n            <label class='el-select' :class='{\"el-select-on\":isOpen}' ref='select-root' tabindex=\"-1\" @blur='toclose'\n            @focus='isFocus = true'>\n            <div class='el-select-head' :class='{\"el-select-head-focus\": isFocus}' @click='checkOpen' ref='input'\n            id='select-input'>{{ options[index].label }}\n            </div>\n            <div class='ul-contain'>\n            <ul id='ul-box' @click='getFocus'>\n            <li v-for='(v, i) of options' @click='changeIndex' :key='v.id'\n            :class='{\"is-select\": index == i, \"is-hover\": hoverIndex == i}' :ki='i'\n            @mouseenter='hoverIndex = i'>\n            {{ v.label }}</li>\n            </ul>\n            </div>\n            </label>\n            ",
        data: function () {
          return { isOpen: !1, isFocus: !1, index: 0, hoverIndex: 0 };
        },
        props: ["options"],
        methods: {
          getFocus: function (e) {
            "ul-box" === e.target.id && (this.isOpen = !0),
              this.$refs.input.focus();
          },
          changeIndex: function (e) {
            (this.index = e.target.getAttribute("ki")),
              (this.isOpen = !1),
              this.$emit("change", this.options[this.index].id);
          },
          checkOpen: function () {
            (this.isOpen = !this.isOpen),
              this.isOpen && this.$refs["select-root"].focus();
          },
          toclose: function () {
            (this.isFocus = !1), (this.isOpen = !1);
          },
        },
        watch: {
          isOpen: function (e) {
            e && (this.hoverIndex = this.index);
          },
        },
      },
      elColorPicker: {
        template:
          "\n            <div class='select-color-wrap'>\n            <div class=\"select-color-content\" @click.stop='selectColor'>\n            <div>\n            <div v-for='(color, i) of colors' :style='{background:color}' class='color-div' :index='i'\n                :class='{\"color-selected\": selectIndex == i}'>\n            </div>\n            </div>\n            <div class='select-color-bottom'>\n            <button\n                @click='$emit(\"select-color\",  colortable[selectIndex]);$emit(\"select-color-close\")'>确认选择</button>\n            <button @click='$emit(\"select-color-close\")'>取消</button>\n            </div>\n            </div>\n            </div>",
        props: ["colortable"],
        data: function () {
          return { selectIndex: 0 };
        },
        methods: {
          selectColor: function (e) {
            -1 !== e.target.className.indexOf("color-div") &&
              (this.selectIndex = e.target.getAttribute("index"));
          },
        },
        computed: {
          colors: function () {
            return this.colortable.map(function (e) {
              var t = e.toString(16),
                s = parseInt(t[0] + t[1], 16),
                i = parseInt(t[2] + t[3], 16),
                o = parseInt(t[4] + t[5], 16),
                r = parseInt(t[6] + t[7], 16);
              return t.length < 8
                ? "rgba(0,0,0,0)"
                : "rgba("
                    .concat(r, ",")
                    .concat(o, ",")
                    .concat(i, ",")
                    .concat(s, ")");
            });
          },
        },
      },
      elProgress: {
        template:
          "<div class='progress-wrap'>\n                        <div class='progress-box'>\n                            <div class='progress-bottom'>\n                                <div class='progress-top' v-progress='progress'>\n                                    <span class='progress-tip'><slot></slot></span>\n                                </div>\n                            </div>\n                            <button class='progress-btn' :disabled='progress<100' @click='$emit(\"close\")'>确定</button>\n                        </div>\n                        </div>",
        props: { progress: Number },
        directives: {
          progress: function (e, t) {
            e.style.width = t.value + "%";
          },
        },
      },
    },
  });
