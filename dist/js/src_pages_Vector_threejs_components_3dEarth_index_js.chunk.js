"use strict";
(self["webpackChunkwealth"] = self["webpackChunkwealth"] || []).push([["src_pages_Vector_threejs_components_3dEarth_index_js"],{

/***/ "./src/pages/Vector/threejs/components/3dEarth/index.js":
/*!**************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./src/pages/Vector/threejs/components/3dEarth/world/index.js");

var dom = document.querySelector('#earth-canvas');
new _world__WEBPACK_IMPORTED_MODULE_0__["default"]({
  dom: dom
});

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/Assets.js":
/*!*********************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/Assets.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resources: () => (/* binding */ resources)
/* harmony export */ });
/* harmony import */ var _assets_gradient_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/gradient.png */ "./src/pages/Vector/threejs/components/3dEarth/world/assets/gradient.png");
/* harmony import */ var _assets_redCircle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/redCircle.png */ "./src/pages/Vector/threejs/components/3dEarth/world/assets/redCircle.png");
/* harmony import */ var _assets_label_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/label.png */ "./src/pages/Vector/threejs/components/3dEarth/world/assets/label.png");
/* harmony import */ var _assets_aperture_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/aperture.png */ "./src/pages/Vector/threejs/components/3dEarth/world/assets/aperture.png");
/* harmony import */ var _assets_glow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/glow.png */ "./src/pages/Vector/threejs/components/3dEarth/world/assets/glow.png");
/* harmony import */ var _assets_light_column_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/light_column.png */ "./src/pages/Vector/threejs/components/3dEarth/world/assets/light_column.png");
/* harmony import */ var _assets_aircraft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/aircraft.png */ "./src/pages/Vector/threejs/components/3dEarth/world/assets/aircraft.png");
/* harmony import */ var _assets_earth_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/earth.jpg */ "./src/pages/Vector/threejs/components/3dEarth/world/assets/earth.jpg");








var textures = [{
  name: 'gradient',
  url: _assets_gradient_png__WEBPACK_IMPORTED_MODULE_0__
}, {
  name: 'redCircle',
  url: _assets_redCircle_png__WEBPACK_IMPORTED_MODULE_1__
}, {
  name: 'label',
  url: _assets_label_png__WEBPACK_IMPORTED_MODULE_2__
}, {
  name: 'aperture',
  url: _assets_aperture_png__WEBPACK_IMPORTED_MODULE_3__
}, {
  name: 'glow',
  url: _assets_glow_png__WEBPACK_IMPORTED_MODULE_4__
}, {
  name: 'light_column',
  url: _assets_light_column_png__WEBPACK_IMPORTED_MODULE_5__
}, {
  name: 'aircraft',
  url: _assets_aircraft_png__WEBPACK_IMPORTED_MODULE_6__
}, {
  name: 'earth',
  url: _assets_earth_jpg__WEBPACK_IMPORTED_MODULE_7__
}];

// 今天静态资源信息
var resources = {
  textures: textures
};

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/Basic.js":
/*!********************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/Basic.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");


/**
 * 创建 threejs 四大上古神器
 * 场景、相机、渲染器、控制器
 */


var Basic = /*#__PURE__*/function () {
  function Basic(dom) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Basic);
    this.dom = dom;
    this.initSences();
    this.setControls();
  }
  /**
   * 初始化场景
   */
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Basic, [{
    key: "initSences",
    value: function initSences() {
      this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
      this.camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
      this.camera.position.set(0, 30, -250);
      this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
        alpha: true,
        //透明
        antialias: true //抗锯齿
      });

      this.renderer.setPixelRatio(window.devicePixelRatio); // 设置屏幕像素比
      this.renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器宽高
      this.dom.appendChild(this.renderer.domElement);
    }

    /**
     * 设置控制器
     */
  }, {
    key: "setControls",
    value: function setControls() {
      // 鼠标控制      相机，渲染dom
      this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.autoRotateSpeed = 3;
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.controls.enableDamping = true;
      // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
      this.controls.dampingFactor = 0.05;
      // 是否可以缩放
      this.controls.enableZoom = true;
      // 设置相机距离原点的最近距离
      this.controls.minDistance = 100;
      // 设置相机距离原点的最远距离
      this.controls.maxDistance = 300;
      // 是否开启右键拖拽
      this.controls.enablePan = true;
    }
  }]);
  return Basic;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basic);

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/Earth.js":
/*!********************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/Earth.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap_gsap_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap/gsap-core */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _shaders_earth_fragment_fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaders/earth/fragment.fs */ "./src/pages/Vector/threejs/components/3dEarth/shaders/earth/fragment.fs");
/* harmony import */ var _shaders_earth_vertex_vs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders/earth/vertex.vs */ "./src/pages/Vector/threejs/components/3dEarth/shaders/earth/vertex.vs");
/* harmony import */ var _Utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utils/common */ "./src/pages/Vector/threejs/components/3dEarth/Utils/common.js");
/* harmony import */ var _Utils_arc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utils/arc */ "./src/pages/Vector/threejs/components/3dEarth/Utils/arc.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/common */ "./src/utils/common.js");













var Earth = /*#__PURE__*/function () {
  function Earth(options) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Earth);
    this.options = options;
    this.group = new three__WEBPACK_IMPORTED_MODULE_11__.Group();
    this.group.name = 'group';
    this.group.scale.set(0, 0, 0);
    // 地球
    this.earthGroup = new three__WEBPACK_IMPORTED_MODULE_11__.Group();
    this.group.add(this.earthGroup);
    this.earthGroup.name = 'EarthGroup';
    // 地球自转
    this.isRotation = this.options.earth.isRotation;
    // 扫光动画 shader
    this.timeValue = 100;
    this.uniforms = {
      glowColor: {
        value: new three__WEBPACK_IMPORTED_MODULE_11__.Color(0x0cd1eb)
      },
      scale: {
        type: 'f',
        value: -1.0
      },
      bias: {
        type: 'f',
        value: 1.0
      },
      power: {
        type: 'f',
        value: 3.3
      },
      time: {
        type: 'f',
        value: this.timeValue
      },
      isHover: {
        value: false
      },
      map: {
        value: null
      }
    };

    // 标注点效果
    this.markupPoint = new three__WEBPACK_IMPORTED_MODULE_11__.Group();
    this.markupPoint.name = 'markupPoint';
    this.waveMeshArr = [];

    // 卫星和标签
    this.circleLineList = [];
    this.circleList = [];
    this.x = 0;
    this.n = 0;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Earth, [{
    key: "init",
    value: function init() {
      var _this = this;
      return new Promise(function (resolve) {
        _this.createEarth(); // 创建地球
        _this.createStars(); // 创建星星
        _this.createRandomStars();
        _this.createEarthGlow(); // 创建光晕
        _this.createEarthAperture(); // 创建地球的大气层
        _this.createMarkupPoint(); // 创建柱状点位
        _this.createSpriteLabel(); // 创建标签
        _this.createAnimateCircle(); // 创建环绕卫星
        _this.createFlyLine(); // 创建飞线
        _this.show();
        resolve();
      });
    }

    /**
     * 创建地球
     */
  }, {
    key: "createEarth",
    value: function createEarth() {
      var earth_geometry = new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(this.options.earth.radius, 50, 50);
      var earth_border = new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(this.options.earth.radius + 10, 60, 60);
      var pointMaterial = new three__WEBPACK_IMPORTED_MODULE_11__.PointsMaterial({
        color: 0x81ffff,
        //设置颜色，默认 0xFFFFFF
        transparent: true,
        sizeAttenuation: true,
        opacity: 0.2,
        vertexColors: false,
        //定义材料是否使用顶点颜色，默认false ---如果该选项设置为true，则color属性失效
        size: 0.03 //定义粒子的大小。默认为1.0
      });

      var points = new three__WEBPACK_IMPORTED_MODULE_11__.Points(earth_border, pointMaterial); //将模型添加到场景

      this.earthGroup.add(points);
      this.uniforms.map.value = this.options.textures.earth;
      var earth_material = new three__WEBPACK_IMPORTED_MODULE_11__.ShaderMaterial({
        // wireframe:true, // 显示模型线条
        uniforms: this.uniforms,
        vertexShader: _shaders_earth_vertex_vs__WEBPACK_IMPORTED_MODULE_6__["default"],
        fragmentShader: _shaders_earth_fragment_fs__WEBPACK_IMPORTED_MODULE_5__["default"]
      });
      earth_material.needsUpdate = true;
      this.earth = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(earth_geometry, earth_material);
      this.earth.name = 'earth';
      this.earthGroup.add(this.earth);
    }

    /**
     * 创建星星
     */
  }, {
    key: "createStars",
    value: function createStars() {
      var vertices = [];
      var colors = [];
      for (var i = 0; i < 5000; i++) {
        var vertex = new three__WEBPACK_IMPORTED_MODULE_11__.Vector3();
        vertex.x = 800 * Math.random() - 300;
        vertex.y = 800 * Math.random() - 300;
        vertex.z = 800 * Math.random() - 300;
        vertices.push(vertex.x, vertex.y, vertex.z);
        colors.push(new three__WEBPACK_IMPORTED_MODULE_11__.Color(1, 1, 1));
      }

      // 星空效果
      this.around = new three__WEBPACK_IMPORTED_MODULE_11__.BufferGeometry();
      this.around.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_11__.BufferAttribute(new Float32Array(vertices), 3));
      this.around.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_11__.BufferAttribute(new Float32Array(colors), 3));
      var aroundMaterial = new three__WEBPACK_IMPORTED_MODULE_11__.PointsMaterial({
        side: 2,
        sizeAttenuation: true,
        color: 0x4d76cf,
        transparent: true,
        opacity: 1,
        map: this.options.textures.gradient
      });
      this.aroundPoints = new three__WEBPACK_IMPORTED_MODULE_11__.Points(this.around, aroundMaterial);
      this.aroundPoints.name = '星空';
      this.aroundPoints.scale.set(1, 1, 1);
      this.group.add(this.aroundPoints);
    }
  }, {
    key: "createRandomStars",
    value: function createRandomStars() {
      this.stars = new three__WEBPACK_IMPORTED_MODULE_11__.Group();
      var geometry = new three__WEBPACK_IMPORTED_MODULE_11__.BoxGeometry(1, 1, 1);
      for (var i = 0; i < 600; i += 1) {
        var x0 = Math.random() - 0.5;
        var y0 = Math.random() - 0.5;
        var z0 = Math.random() - 0.5;
        var starRadius = this.options.earth.radius * 2 + (Math.random() - 0.5) * this.options.earth.radius * 0.6;
        var vectorRadius = Math.sqrt(Math.pow(x0, 2) + Math.pow(y0, 2) + Math.pow(z0, 2));
        var starPosition = new three__WEBPACK_IMPORTED_MODULE_11__.Vector3(x0 * starRadius / vectorRadius, y0 * starRadius / vectorRadius, z0 * starRadius / vectorRadius);
        var material = new three__WEBPACK_IMPORTED_MODULE_11__.MeshBasicMaterial({
          color: new three__WEBPACK_IMPORTED_MODULE_11__.Color((0,_utils_common__WEBPACK_IMPORTED_MODULE_10__.randomHexColor)()),
          transparent: true,
          opacity: Math.random() * 0.8
        });
        var cube = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(geometry, material);
        cube.position.x = starPosition.x;
        cube.position.y = starPosition.y;
        cube.position.z = starPosition.z;
        cube.rotation.x = Math.random() * 2 * Math.PI;
        cube.rotation.y = Math.random() * 2 * Math.PI;
        cube.rotation.z = Math.random() * 2 * Math.PI;
        var scale = Math.random() + 0.2;
        cube.scale.x = scale;
        cube.scale.y = scale;
        cube.scale.z = scale;
        cube.needsUpdate = true;
        this.stars.add(cube);
      }
      this.earth.add(this.stars);
    }

    /**
     * 创建光晕
     */
  }, {
    key: "createEarthGlow",
    value: function createEarthGlow() {
      var R = this.options.earth.radius; //地球半径
      var texture = this.options.textures.glow; // 加载纹理贴图
      var spriteMaterial = new three__WEBPACK_IMPORTED_MODULE_11__.SpriteMaterial({
        map: texture,
        // 设置精灵纹理贴图
        transparent: true,
        //开启透明
        color: 0x4390d1,
        opacity: 0.7,
        // 可以通过透明度整体调节光圈
        depthWrite: false //禁止写入深度缓冲区数据
      });

      // 创建表示地球光圈的精灵模型
      var sprite = new three__WEBPACK_IMPORTED_MODULE_11__.Sprite(spriteMaterial);
      sprite.scale.set(R * 3, R * 3, 1);
      this.earthGroup.add(sprite);
    }

    /**
     * 创建地球的大气层
     */
  }, {
    key: "createEarthAperture",
    value: function createEarthAperture() {
      var vertexShader = ['varying vec3	vVertexWorldPosition;', 'varying vec3	vVertexNormal;', 'varying vec4	vFragColor;', 'void main(){', '	vVertexNormal	= normalize(normalMatrix * normal);',
      //将法线转换到视图坐标系中
      '	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;',
      //将顶点转换到世界坐标系中
      '	// set gl_Position', '	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);', '}'].join('\n');

      //大气层效果
      var AeroSphere = {
        uniforms: {
          coeficient: {
            type: 'f',
            value: 1.0
          },
          power: {
            type: 'f',
            value: 3
          },
          glowColor: {
            type: 'c',
            value: new three__WEBPACK_IMPORTED_MODULE_11__.Color(0x4390d1)
          }
        },
        vertexShader: vertexShader,
        fragmentShader: ['uniform vec3	glowColor;', 'uniform float	coeficient;', 'uniform float	power;', 'varying vec3	vVertexNormal;', 'varying vec3	vVertexWorldPosition;', 'varying vec4	vFragColor;', 'void main(){', '	vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;',
        //世界坐标系中从相机位置到顶点位置的距离
        '	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;',
        //视图坐标系中从相机位置到顶点位置的距离
        '	viewCameraToVertex= normalize(viewCameraToVertex);',
        //规一化
        '	float intensity	= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);', '	gl_FragColor = vec4(glowColor, intensity);', '}'].join('\n')
      };

      //球体 辉光 大气层
      var material = new three__WEBPACK_IMPORTED_MODULE_11__.ShaderMaterial({
        uniforms: AeroSphere.uniforms,
        vertexShader: AeroSphere.vertexShader,
        fragmentShader: AeroSphere.fragmentShader,
        blending: three__WEBPACK_IMPORTED_MODULE_11__.NormalBlending,
        transparent: true,
        depthWrite: false
      });
      var sphere = new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(this.options.earth.radius + 0, 50, 50);
      var mesh = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(sphere, material);
      this.earthGroup.add(mesh);
    }

    /**
     * 创建柱状点位
     */
  }, {
    key: "createMarkupPoint",
    value: function () {
      var _createMarkupPoint = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var _this2 = this;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Promise.all(this.options.data.map( /*#__PURE__*/function () {
                var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(item) {
                  var radius, lon, lat, mesh, LightPillar, WaveMesh;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        radius = _this2.options.earth.radius;
                        lon = item.startArray.E; //经度
                        lat = item.startArray.N; //纬度
                        _this2.punctuationMaterial = new three__WEBPACK_IMPORTED_MODULE_11__.MeshBasicMaterial({
                          color: _this2.options.punctuation.circleColor,
                          map: _this2.options.textures.label,
                          transparent: true,
                          depthWrite: false //禁止写入深度缓冲区数据
                        });

                        //光柱底座矩形平面
                        mesh = (0,_Utils_common__WEBPACK_IMPORTED_MODULE_7__.createPointMesh)({
                          radius: radius,
                          lon: lon,
                          lat: lat,
                          material: _this2.punctuationMaterial
                        });
                        _this2.markupPoint.add(mesh);

                        // 创建光柱
                        LightPillar = (0,_Utils_common__WEBPACK_IMPORTED_MODULE_7__.createLightPillar)({
                          radius: _this2.options.earth.radius,
                          lon: lon,
                          lat: lat,
                          index: 0,
                          textures: _this2.options.textures,
                          punctuation: _this2.options.punctuation
                        });
                        _this2.markupPoint.add(LightPillar);

                        //波动光圈
                        WaveMesh = (0,_Utils_common__WEBPACK_IMPORTED_MODULE_7__.createWaveMesh)({
                          radius: radius,
                          lon: lon,
                          lat: lat,
                          textures: _this2.options.textures
                        });
                        _this2.markupPoint.add(WaveMesh);
                        _this2.waveMeshArr.push(WaveMesh);
                        _context.next = 13;
                        return Promise.all(item.endArray.map(function (obj) {
                          var lon = obj.E; //经度
                          var lat = obj.N; //纬度
                          //光柱底座矩形平面
                          var mesh = (0,_Utils_common__WEBPACK_IMPORTED_MODULE_7__.createPointMesh)({
                            radius: radius,
                            lon: lon,
                            lat: lat,
                            material: _this2.punctuationMaterial
                          });
                          _this2.markupPoint.add(mesh);

                          //光柱
                          var LightPillar = (0,_Utils_common__WEBPACK_IMPORTED_MODULE_7__.createLightPillar)({
                            radius: _this2.options.earth.radius,
                            lon: lon,
                            lat: lat,
                            index: 1,
                            textures: _this2.options.textures,
                            punctuation: _this2.options.punctuation
                          });
                          _this2.markupPoint.add(LightPillar);

                          //波动光圈
                          var WaveMesh = (0,_Utils_common__WEBPACK_IMPORTED_MODULE_7__.createWaveMesh)({
                            radius: radius,
                            lon: lon,
                            lat: lat,
                            textures: _this2.options.textures
                          });
                          _this2.markupPoint.add(WaveMesh);
                          _this2.waveMeshArr.push(WaveMesh);
                        }));
                      case 13:
                        _this2.earthGroup.add(_this2.markupPoint);
                      case 14:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createMarkupPoint() {
        return _createMarkupPoint.apply(this, arguments);
      }
      return createMarkupPoint;
    }()
    /**
     * 创建标签
     */
  }, {
    key: "createSpriteLabel",
    value: function createSpriteLabel() {
      var _this3 = this;
      Promise.all(this.options.data.map(function (item) {
        var _cityArray;
        var cityArray = [];
        cityArray.push(item.startArray);
        cityArray = (_cityArray = cityArray).concat.apply(_cityArray, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(item.endArray));
        Promise.all(cityArray.map( /*#__PURE__*/function () {
          var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(e) {
            var p, div, shareContent, opts, canvas, dataURL, map, material, sprite, len;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  p = (0,_Utils_common__WEBPACK_IMPORTED_MODULE_7__.lon2xyz)(_this3.options.earth.radius * 1.001, e.E, e.N);
                  div = "<div class=\"fire-div\">".concat(e.name, "</div>");
                  shareContent = document.getElementById('html2canvas');
                  shareContent.innerHTML = div;
                  opts = {
                    backgroundColor: null,
                    // 背景透明
                    scale: 6,
                    dpi: window.devicePixelRatio
                  };
                  _context3.next = 7;
                  return html2canvas__WEBPACK_IMPORTED_MODULE_9___default()(document.getElementById('html2canvas'), opts);
                case 7:
                  canvas = _context3.sent;
                  dataURL = canvas.toDataURL('image/png');
                  map = new three__WEBPACK_IMPORTED_MODULE_11__.TextureLoader().load(dataURL);
                  material = new three__WEBPACK_IMPORTED_MODULE_11__.SpriteMaterial({
                    map: map,
                    transparent: true
                  });
                  sprite = new three__WEBPACK_IMPORTED_MODULE_11__.Sprite(material);
                  len = 5 + (e.name.length - 2) * 2;
                  sprite.scale.set(len, 3, 1);
                  sprite.position.set(p.x * 1.1, p.y * 1.1, p.z * 1.1);
                  _this3.earth.add(sprite);
                case 16:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }()));
      }));
    }

    /**
     * 创建环绕卫星
     */
  }, {
    key: "createAnimateCircle",
    value: function createAnimateCircle() {
      var list = (0,_Utils_common__WEBPACK_IMPORTED_MODULE_7__.getCirclePoints)({
        radius: this.options.earth.radius + 15,
        number: 150,
        //切割数
        closed: true // 闭合
      });

      var mat = new three__WEBPACK_IMPORTED_MODULE_11__.MeshBasicMaterial({
        color: '#0c3172',
        transparent: true,
        opacity: 0.4,
        side: three__WEBPACK_IMPORTED_MODULE_11__.DoubleSide
      });
      var line = (0,_Utils_common__WEBPACK_IMPORTED_MODULE_7__.createAnimateLine)({
        pointList: list,
        material: mat,
        number: 100,
        radius: 0.1
      });
      this.earthGroup.add(line);

      // 在clone两条线出来
      var l2 = line.clone();
      l2.scale.set(1.2, 1.2, 1.2);
      l2.rotateZ(Math.PI / 6);
      this.earthGroup.add(l2);
      var l3 = line.clone();
      l3.scale.set(0.8, 0.8, 0.8);
      l3.rotateZ(-Math.PI / 6);
      this.earthGroup.add(l3);

      /**
       * 旋转的球
       */
      var ball = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(this.options.satellite.size, 32, 32), new three__WEBPACK_IMPORTED_MODULE_11__.MeshBasicMaterial({
        color: '#e0b187' // 745F4D
      }));

      var ball2 = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(this.options.satellite.size, 32, 32), new three__WEBPACK_IMPORTED_MODULE_11__.MeshBasicMaterial({
        color: '#628fbb' // 324A62
      }));

      var ball3 = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(this.options.satellite.size, 32, 32), new three__WEBPACK_IMPORTED_MODULE_11__.MeshBasicMaterial({
        color: '#806bdf' //6D5AC4
      }));

      this.circleLineList.push(line, l2, l3);
      ball.name = ball2.name = ball3.name = '卫星';
      for (var i = 0; i < this.options.satellite.number; i++) {
        var ball01 = ball.clone();
        // 一根线上总共有几个球，根据数量平均分布一下
        var num = Math.floor(list.length / this.options.satellite.number);
        ball01.position.set(list[num * (i + 1)][0] * 1, list[num * (i + 1)][1] * 1, list[num * (i + 1)][2] * 1);
        line.add(ball01);
        var ball02 = ball2.clone();
        var num02 = Math.floor(list.length / this.options.satellite.number);
        ball02.position.set(list[num02 * (i + 1)][0] * 1, list[num02 * (i + 1)][1] * 1, list[num02 * (i + 1)][2] * 1);
        l2.add(ball02);
        var ball03 = ball2.clone();
        var num03 = Math.floor(list.length / this.options.satellite.number);
        ball03.position.set(list[num03 * (i + 1)][0] * 1, list[num03 * (i + 1)][1] * 1, list[num03 * (i + 1)][2] * 1);
        l3.add(ball03);
      }
    }

    /**
     * 创建飞线
     */
  }, {
    key: "createFlyLine",
    value: function createFlyLine() {
      var _this4 = this;
      this.flyLineArcGroup = new three__WEBPACK_IMPORTED_MODULE_11__.Group();
      this.flyLineArcGroup.userData['flyLineArray'] = [];
      this.earthGroup.add(this.flyLineArcGroup);
      this.options.data.forEach(function (cities) {
        cities.endArray.forEach(function (item) {
          // 调用函数flyArc绘制球面上任意两点之间飞线圆弧轨迹
          var arcline = (0,_Utils_arc__WEBPACK_IMPORTED_MODULE_8__.flyArc)(_this4.options.earth.radius, cities.startArray.E, cities.startArray.N, item.E, item.N, _this4.options.flyLine);
          _this4.flyLineArcGroup.add(arcline); // 飞线插入flyArcGroup中
          _this4.flyLineArcGroup.userData['flyLineArray'].push(arcline.userData['flyLine']);
        });
      });
    }

    /**
     * 渲染显示
     */
  }, {
    key: "show",
    value: function show() {
      gsap_gsap_core__WEBPACK_IMPORTED_MODULE_12__["default"].to(this.group.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 3,
        ease: 'Quadratic'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$flyLineArcGroup,
        _this$flyLineArcGroup2,
        _this5 = this;
      // 地球自转
      if (this.isRotation) {
        this.earthGroup.rotation.y += this.options.earth.rotateSpeed;
      }

      // 幽灵👻光晕
      this.uniforms.time.value = this.uniforms.time.value < -this.timeValue ? this.timeValue : this.uniforms.time.value - 1;

      // 飞行线
      (_this$flyLineArcGroup = this.flyLineArcGroup) === null || _this$flyLineArcGroup === void 0 ? void 0 : (_this$flyLineArcGroup2 = _this$flyLineArcGroup.userData['flyLineArray']) === null || _this$flyLineArcGroup2 === void 0 ? void 0 : _this$flyLineArcGroup2.forEach(function (fly) {
        fly.rotation.z += _this5.options.flyLine.speed; // 调节飞线速度
        if (fly.rotation.z >= fly.flyEndAngle) fly.rotation.z = 0;
      });
      this.circleLineList.forEach(function (e) {
        e.rotateY(_this5.options.satellite.rotateSpeed);
      });
      if (this.waveMeshArr.length) {
        this.waveMeshArr.forEach(function (mesh) {
          mesh.userData['scale'] += 0.007;
          mesh.scale.set(mesh.userData['size'] * mesh.userData['scale'], mesh.userData['size'] * mesh.userData['scale'], mesh.userData['size'] * mesh.userData['scale']);
          if (mesh.userData['scale'] <= 1.5) {
            mesh.material.opacity = (mesh.userData['scale'] - 1) * 2; //2等于1/(1.5-1.0)，保证透明度在0~1之间变化
          } else if (mesh.userData['scale'] > 1.5 && mesh.userData['scale'] <= 2) {
            mesh.material.opacity = 1 - (mesh.userData['scale'] - 1.5) * 2; //2等于1/(2.0-1.5) mesh缩放2倍对应0 缩放1.5被对应1
          } else {
            mesh.userData['scale'] = 1;
          }
        });
      }
    }
  }]);
  return Earth;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Earth);

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/Resources.js":
/*!************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/Resources.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets */ "./src/pages/Vector/threejs/components/3dEarth/world/Assets.js");







// 资源加载
var Resources = /*#__PURE__*/function () {
  function Resources(callback) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Resources);
    this.callback = callback;
    this.textures = {}; // 贴图对象
    this.setLoadingManager();
    this.loadResources();
  }
  /**
   * 管理加载状态
   */
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Resources, [{
    key: "setLoadingManager",
    value: function setLoadingManager() {
      var _this = this;
      this.manager = new three__WEBPACK_IMPORTED_MODULE_5__.LoadingManager();
      this.manager.onStart = function () {
        return console.log('开始加载资源文件');
      };
      this.manager.onLoad = function () {
        return _this.callback();
      };
      this.manager.onProgress = function (url) {
        return console.log("\u6B63\u5728\u52A0\u8F7D\uFF1A".concat(url));
      };
      this.manager.onError = function (url) {
        return console.log("\u52A0\u8F7D\u5931\u8D25\uFF1A".concat(url));
      };
    }

    /**
     * 加载资源
     */
  }, {
    key: "loadResources",
    value: function () {
      var _loadResources = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var _resources$textures,
          _this2 = this;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader(this.manager);
              _context.next = 3;
              return _Assets__WEBPACK_IMPORTED_MODULE_4__.resources === null || _Assets__WEBPACK_IMPORTED_MODULE_4__.resources === void 0 ? void 0 : (_resources$textures = _Assets__WEBPACK_IMPORTED_MODULE_4__.resources.textures) === null || _resources$textures === void 0 ? void 0 : _resources$textures.forEach(function (item) {
                _this2.textureLoader.load(item.url, function (result) {
                  _this2.textures[item.name] = result;
                });
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function loadResources() {
        return _loadResources.apply(this, arguments);
      }
      return loadResources;
    }()
  }]);
  return Resources;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Resources);

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/Sizes.js":
/*!********************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/Sizes.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var pietile_eventemitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pietile-eventemitter */ "./node_modules/pietile-eventemitter/dist/index.js");
/* harmony import */ var pietile_eventemitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pietile_eventemitter__WEBPACK_IMPORTED_MODULE_2__);



var Sizes = /*#__PURE__*/function () {
  function Sizes(options) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sizes);
    this.emitter = new pietile_eventemitter__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    // Viewport size
    this.$sizeViewport = options.dom;
    this.viewport = {
      width: 0,
      height: 0
    };
    this.resize = this.resize.bind(this);
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  /**
   * 目前用于监听历史记录执行 historyChange
   * @param event 事件
   * @param fun 执行
   */
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sizes, [{
    key: "$on",
    value: function $on(event, fun) {
      this.emitter.on(event, function () {
        fun();
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      // 可视区域大小
      this.viewport.width = this.$sizeViewport.offsetWidth;
      this.viewport.height = this.$sizeViewport.offsetHeight;
      this.emitter.emit('resize');
    }
  }]);
  return Sizes;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sizes);

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/assets/Data.js":
/*!**************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/assets/Data.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  startArray: {
    name: '杭州',
    N: 30.246026,
    E: 120.210792
  },
  endArray: [{
    name: '曼谷',
    N: 22,
    //维度
    E: 100.49074172973633 //经度
  }, {
    name: '澳大利亚',
    N: -23.68477416688374,
    E: 133.857421875
  }, {
    name: '新疆维吾尔自治区',
    N: 41.748,
    E: 84.9023
  }, {
    name: '德黑兰',
    N: 35,
    E: 51
  }, {
    name: '德黑兰',
    N: 35,
    E: 51
  }, {
    name: '美国',
    N: 34.125447565116126,
    E: 241.7431640625
  }, {
    name: '英国',
    N: 51.508742458803326,
    E: 359.82421875
  }, {
    name: '巴西',
    N: -9.96885060854611,
    E: 668.1445312499999
  }]
}, {
  startArray: {
    name: '北京',
    N: 39.89491,
    E: 116.322056
  },
  endArray: [{
    name: '西藏',
    N: 29.660361,
    //维度
    E: 91.132212 //经度
  }, {
    name: '广西',
    N: 22.830824,
    E: 108.30616
  }, {
    name: '江西',
    N: 28.676493,
    E: 115.892151
  }, {
    name: '贵阳',
    N: 26.647661,
    E: 106.630153
  }]
}]);

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/index.js":
/*!********************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Basic */ "./src/pages/Vector/threejs/components/3dEarth/world/Basic.js");
/* harmony import */ var _Earth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Earth */ "./src/pages/Vector/threejs/components/3dEarth/world/Earth.js");
/* harmony import */ var _Resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Resources */ "./src/pages/Vector/threejs/components/3dEarth/world/Resources.js");
/* harmony import */ var _Sizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sizes */ "./src/pages/Vector/threejs/components/3dEarth/world/Sizes.js");
/* harmony import */ var _assets_Data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/Data */ "./src/pages/Vector/threejs/components/3dEarth/world/assets/Data.js");









var World = /*#__PURE__*/function () {
  function World(option) {
    var _this = this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, World);
    this.option = option;
    this.basic = new _Basic__WEBPACK_IMPORTED_MODULE_4__["default"](option.dom);
    this.renderer = this.basic.renderer;
    this.scene = this.basic.scene;
    this.camera = this.basic.camera;
    this.controls = this.basic.controls;

    // 自适应处理
    this.sizes = new _Sizes__WEBPACK_IMPORTED_MODULE_7__["default"]({
      dom: option.dom
    });
    this.sizes.$on('resize', function () {
      _this.renderer.setSize(Number(_this.sizes.viewport.width), Number(_this.sizes.viewport.height));
      _this.camera.aspect = Number(_this.sizes.viewport.width) / Number(_this.sizes.viewport.height);
      _this.camera.updateProjectionMatrix();
    });
    // 资源加载
    this.resources = new _Resources__WEBPACK_IMPORTED_MODULE_6__["default"]( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.createEarth();
          case 2:
            _this.render();
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
  }

  // 创建地球
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(World, [{
    key: "createEarth",
    value: function () {
      var _createEarth = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var loading;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.earth = new _Earth__WEBPACK_IMPORTED_MODULE_5__["default"]({
                data: _assets_Data__WEBPACK_IMPORTED_MODULE_8__["default"],
                dom: this.option.dom,
                textures: this.resources.textures,
                earth: {
                  radius: 50,
                  rotateSpeed: 0.001,
                  isRotation: true
                },
                satellite: {
                  show: true,
                  rotateSpeed: -0.01,
                  size: 1,
                  number: 2
                },
                punctuation: {
                  circleColor: 0x3892ff,
                  lightColumn: {
                    startColor: 0xe4007f,
                    // 起点颜色
                    endColor: 0xffffff // 终点颜色
                  }
                },

                flyLine: {
                  color: 0xf3ae76,
                  // 飞线的颜色
                  flyLineColor: 0xff7714,
                  // 飞行线的颜色
                  speed: 0.005 // 拖尾飞线的速度
                }
              });

              this.scene.add(this.earth.group);
              _context2.next = 4;
              return this.earth.init();
            case 4:
              // 隐藏dom
              loading = document.querySelector('#loading');
              loading.classList.add('out');
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createEarth() {
        return _createEarth.apply(this, arguments);
      }
      return createEarth;
    }()
    /**
     * 渲染函数
     */
  }, {
    key: "render",
    value: function render() {
      requestAnimationFrame(this.render.bind(this));
      this.renderer.render(this.scene, this.camera);
      this.controls && this.controls.update();
      this.earth && this.earth.render();
    }
  }]);
  return World;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (World);

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/shaders/earth/fragment.fs":
/*!*******************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/shaders/earth/fragment.fs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("uniform vec3 glowColor;\r\nuniform float bias;\r\nuniform float power;\r\nuniform float time;\r\nvarying vec3 vp;\r\nvarying vec3 vNormal;\r\nvarying vec3 vPositionNormal;\r\nuniform float scale;\r\n// 获取纹理\r\nuniform sampler2D map;\r\n// 纹理坐标\r\nvarying vec2 vUv;\r\n\r\nvoid main(void){\r\n  float a = pow( bias + scale * abs(dot(vNormal, vPositionNormal)), power );\r\n  if(vp.y > time && vp.y < time + 20.0) {\r\n    float t =  smoothstep(0.0, 0.8,  (1.0 - abs(0.5 - (vp.y - time) / 20.0)) / 3.0  );\r\n    gl_FragColor = mix(gl_FragColor, vec4(glowColor, 1.0), t * t );\r\n  }\r\n  gl_FragColor = mix(gl_FragColor, vec4( glowColor, 1.0 ), a);\r\n  float b = 0.8;\r\n  gl_FragColor = gl_FragColor + texture2D( map, vUv );\r\n}");

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/shaders/earth/vertex.vs":
/*!*****************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/shaders/earth/vertex.vs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\nvarying vec2 vUv;\r\nvarying vec3 vNormal;\r\nvarying vec3 vp;\r\nvarying vec3 vPositionNormal;\r\nvoid main(void){\r\n  vUv = uv;\r\n  vNormal = normalize( normalMatrix * normal ); // 转换到视图空间\r\n  vp = position;\r\n  vPositionNormal = normalize(( modelViewMatrix * vec4(position, 1.0) ).xyz);\r\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n}");

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/assets/aircraft.png":
/*!*******************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/assets/aircraft.png ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/media/aircraft.a5.png";

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/assets/aperture.png":
/*!*******************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/assets/aperture.png ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/media/aperture.90.png";

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/assets/earth.jpg":
/*!****************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/assets/earth.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/media/earth.d8.jpg";

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/assets/glow.png":
/*!***************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/assets/glow.png ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/media/glow.08.png";

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/assets/gradient.png":
/*!*******************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/assets/gradient.png ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/media/gradient.0a.png";

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/assets/label.png":
/*!****************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/assets/label.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/media/label.90.png";

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/assets/light_column.png":
/*!***********************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/assets/light_column.png ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/media/light_column.ac.png";

/***/ }),

/***/ "./src/pages/Vector/threejs/components/3dEarth/world/assets/redCircle.png":
/*!********************************************************************************!*\
  !*** ./src/pages/Vector/threejs/components/3dEarth/world/assets/redCircle.png ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/media/redCircle.b1.png";

/***/ })

}]);
//# sourceMappingURL=src_pages_Vector_threejs_components_3dEarth_index_js.chunk.js.map