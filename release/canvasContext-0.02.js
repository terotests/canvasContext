var canvasContext_prototype = function() {
  'use strict';
  var ocTransform_prototype = function() {;
    (function(_myTrait_) {
      var _initDone;
      var rv;
      _myTrait_.arcTo = function(t) {
        var args = Array.prototype.slice.call(arguments);

        this._point.tx0 = this._point.tx1;
        this._point.ty0 = this._point.ty1;

        this._point.y = args.pop();
        this._point.x = args.pop();

        var p = this.transformPoint(this._point.x, this._point.y);
        this._point.tx1 = p.x;
        this._point.ty1 = p.y;
      }
      _myTrait_.bezierCurveTo = function(t) {
        var args = Array.prototype.slice.call(arguments);

        this._point.tx0 = this._point.tx1;
        this._point.ty0 = this._point.ty1;

        this._point.y = args.pop();
        this._point.x = args.pop();

        var p = this.transformPoint(this._point.x, this._point.y);
        this._point.tx1 = p.x;
        this._point.ty1 = p.y;
      }
      _myTrait_.copyFrom = function(m) {

        if (m.m) m = m.m;

        var myM = this.m;
        var didChange = false;

        for (var i = 0; i < 6; i++)
          if (myM[i] != m[i]) didChange = true;

        myM[0] = m[0];
        myM[1] = m[1];
        myM[2] = m[2];
        myM[3] = m[3];
        myM[4] = m[4];
        myM[5] = m[5];
        return didChange;

      }
      _myTrait_.fillStyle = function(v) {
        this.setStyle("fillStyle", v);
      }
      _myTrait_.font = function(v) {

        var parts = v.split(" ");

        this.setStyle("font-size", parts[0]);
        this.setStyle("font-family", parts[1]);
      }
      _myTrait_.getStyle = function(n) {
        var s = this._fillState[this._fillState.length - 1];
        if (s) {
          return s[n];
        }
      }
      _myTrait_.getSvgTransform = function(t) {
        var m = this.m;
        return "matrix(" + m[0] + "," + m[1] + "," + m[2] + "," + m[3] + "," + m[4] + "," + m[5] + ")";
      }
      _myTrait_.globalAlpha = function(v, foo) {

        this.setStyle("globalAlpha", v);
      }
      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
        _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
      _myTrait_.__traitInit.push(function() {

        if (!_initDone) {
          rv = {
            x: 0,
            y: 0
          };
        }
        this.reset();


        this._point = {
          x: 0,
          y: 0,
          tx0: 0,
          ty0: 0,
          tx1: 0,
          ty1: 0
        };



      });
      _myTrait_.invert = function() {

        var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
        var m0 = this.m[3] * d;
        var m1 = -this.m[1] * d;
        var m2 = -this.m[2] * d;
        var m3 = this.m[0] * d;
        var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
        var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        this.m[0] = m0;
        this.m[1] = m1;
        this.m[2] = m2;
        this.m[3] = m3;
        this.m[4] = m4;
        this.m[5] = m5;

      }
      _myTrait_.lineTo = function(x, y) {
        var args = Array.prototype.slice.call(arguments);

        this._point.tx0 = this._point.tx1;
        this._point.ty0 = this._point.ty1;

        this._point.y = args.pop();
        this._point.x = args.pop();

        var p = this.transformPoint(this._point.x, this._point.y);
        this._point.tx1 = p.x;
        this._point.ty1 = p.y;
      }
      _myTrait_.lineWidth = function(v) {
        this.setStyle("lineWidth", v);
      }
      _myTrait_.moveTo = function(x, y) {
        var args = Array.prototype.slice.call(arguments);

        this._point.tx0 = this._point.tx1;
        this._point.ty0 = this._point.ty1;

        this._point.y = args.pop();
        this._point.x = args.pop();

        var p = this.transformPoint(this._point.x, this._point.y);
        this._point.tx1 = p.x;
        this._point.ty1 = p.y;
      }
      _myTrait_.multiply = function(matrix) {

        var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
        var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];

        var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
        var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];

        var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
        var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];

        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        this.m[4] = dx;
        this.m[5] = dy;

      }
      _myTrait_.quadraticCurveTo = function(t) {
        var args = Array.prototype.slice.call(arguments);

        this._point.tx0 = this._point.tx1;
        this._point.ty0 = this._point.ty1;

        this._point.y = args.pop();
        this._point.x = args.pop();

        var p = this.transformPoint(this._point.x, this._point.y);
        this._point.tx1 = p.x;
        this._point.ty1 = p.y;


      }
      _myTrait_.reset = function() {
        if (!this.m) {
          this.m = [1, 0, 0, 1, 0, 0];
          this._point = {
            x: 0,
            y: 0,
            tx0: 0,
            ty0: 0,
            tx1: 0,
            ty1: 0
          };
        } else {
          var m = this.m;
          m[0] = 1;
          m[1] = 0;
          m[2] = 0;
          m[3] = 1;
          m[4] = 0;
          m[5] = 0;
          this._point.x = 0;
          this._point.y = 0;
          this._point.tx1 = 0;
          this._point.ty1 = 0;
          this._point.tx0 = 0;
          this._point.ty0 = 0;
        }

        this._fillState = [{
          "globalAlpha": 1,
          "fillStyle": "none",
          "strokeStyle": "black",
          "font-size": 10,
          "lineWidth": 1,
          "font-family": "Arial"
        }];

      }
      _myTrait_.restore = function() {

        //console.log("Restoring, old matrix was ");
        //console.log(this.m);
        this.m = this._oldies.pop();

        this._fillState.pop();

      }
      _myTrait_.rotate = function(rad) {


        //console.log("trans.rotate "+rad);
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var m11 = this.m[0] * c + this.m[2] * s;
        var m12 = this.m[1] * c + this.m[3] * s;
        var m21 = this.m[0] * -s + this.m[2] * c;
        var m22 = this.m[1] * -s + this.m[3] * c;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;

      }
      _myTrait_.rotateAround = function(x, y, angle) {

        //console.log("trans.rotateAround "+x+","+y+","+angle);
        this.translate(x, y);
        this.rotate(angle * Math.PI / 180); // rotate 90 degrees
        this.translate(-x, -y);

      }
      _myTrait_.save = function() {

        // Q: how to clone an array
        // http://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript
        var old = this.m.slice(0);
        //console.log("Save");
        //console.log(old);
        //console.log(this.m);
        if (!this._oldies) this._oldies = [];
        this._oldies.push(old);

        var oldState = this._fillState[this._fillState.length - 1],
          newState = {};

        for (var n in oldState) {
          if (oldState.hasOwnProperty(n))
            newState[n] = oldState[n];
        }

        this._fillState.push(newState);

      }
      _myTrait_.scale = function(sx, sy) {

        if (isNaN(sx)) return;
        if (isNaN(sy)) return;
        //console.log("trans.scale "+sx+","+sy);
        this.m[0] *= sx;
        this.m[1] *= sx;
        this.m[2] *= sy;
        this.m[3] *= sy;

      }
      _myTrait_.setStyle = function(n, v) {

        var s = this._fillState[this._fillState.length - 1];
        if (s) {
          s[n] = v;
        }
      }
      _myTrait_.strokeStyle = function(v) {
        this.setStyle("strokeStyle", v);
      }
      _myTrait_.transformDelta = function(dx, dy) {


        rv.x = dx * this.m[0] + dy * this.m[2];
        rv.y = dx * this.m[1] + dy * this.m[3];
        return rv;

      }
      _myTrait_.transformPoint = function(px, py) {


        var x = px;
        var y = py;
        rv.x = x * this.m[0] + y * this.m[2] + this.m[4];
        rv.y = x * this.m[1] + y * this.m[3] + this.m[5];
        return rv;

      }
      _myTrait_.translate = function(x, y) {


        //console.log("trans.rotate "+x+","+y);
        this.m[4] += this.m[0] * x + this.m[2] * y;
        this.m[5] += this.m[1] * x + this.m[3] * y;

      }
      _myTrait_.translateAbsolute = function(x, y) {
        this.m[4] = this.m[0] * x + this.m[2] * y;
        this.m[5] = this.m[1] * x + this.m[3] * y;
      }
      _myTrait_.updateContext = function(ctx) {

        var m = this.m;
        ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);

      }
      _myTrait_.xScaleFactor = function() {

        var a = this.m[0],
          b = this.m[2];
        return Math.sqrt(a * a + b * b);

      }
    }(this));
  }
  var ocTransform = function(a, b, c, d, e, f, g, h) {
    if (this instanceof ocTransform) {
      var args = [a, b, c, d, e, f, g, h];
      if (this.__factoryClass) {
        var m = this;
        var res;
        this.__factoryClass.forEach(function(initF) {
          res = initF.apply(m, args);
        });
        if (Object.prototype.toString.call(res) == '[object Function]') {
          if (res._classInfo.name != ocTransform._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (this.__traitInit) {
        var m = this;
        this.__traitInit.forEach(function(initF) {
          initF.apply(m, args);
        })
      } else {
        if (typeof this.init == 'function')
          this.init.apply(this, args);
      }
    } else return new ocTransform(a, b, c, d, e, f, g, h);
  };
  ocTransform._classInfo = {
    name: 'ocTransform'
  };
  ocTransform.prototype = new ocTransform_prototype();
  var _promise_prototype = function() {
    'use strict';
    var later_prototype = function() {;
      (function(_myTrait_) {
        var _initDone;
        var _callers;
        var _oneTimers;
        var _everies;
        var _framers;
        _myTrait_.add = function(fn, thisObj, args) {
          if (thisObj || args) {
            var tArgs;
            if (Object.prototype.toString.call(args) === '[object Array]') {
              tArgs = args;
            } else {
              tArgs = Array.prototype.slice.call(arguments, 2);
              if (!tArgs) tArgs = [];
            }
            _callers.push([thisObj, fn, tArgs]);
          } else {
            _callers.push(fn);
          }
        }
        _myTrait_.after = function(seconds, fn, name) {

          if (!name) {
            name = "time" + (new Date()).getTime() + Math.random(10000000);
          }

          _everies[name] = {
            step: Math.floor(seconds * 1000),
            fn: fn,
            nextTime: 0,
            remove: true
          };
        }
        _myTrait_.asap = function(fn) {
          this.add(fn);

        }
        _myTrait_.every = function(seconds, fn, name) {

          if (!name) {
            name = "time" + (new Date()).getTime() + Math.random(10000000);
          }

          _everies[name] = {
            step: Math.floor(seconds * 1000),
            fn: fn,
            nextTime: 0
          };
        }
        if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
          _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
        if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
        _myTrait_.__traitInit.push(function(interval, fn) {
          if (!_initDone) {

            this.polyfill();

            var frame, cancelFrame;
            if (typeof(window) != "undefined") {
              var frame = window['requestAnimationFrame'],
                cancelFrame = window['cancelRequestAnimationFrame'];
              ['', 'ms', 'moz', 'webkit', 'o'].forEach(function(x) {
                if (!frame) {
                  frame = window[x + 'RequestAnimationFrame'];
                  cancelFrame = window[x + 'CancelAnimationFrame'] || window[x + 'CancelRequestAnimationFrame'];
                }
              });
            }

            if (!frame)
              frame = function(cb) {
                return setTimeout(cb, 16);
              };

            if (!cancelFrame)
              cancelFrame = function(id) {
                clearTimeout(id);
              };

            _callers = [];
            _oneTimers = {};
            _everies = {};
            _framers = [];
            var lastMs = 0;

            var _callQueQue = function() {
              var ms = (new Date()).getTime();
              var fn;
              while (fn = _callers.shift()) {
                if (Object.prototype.toString.call(fn) === '[object Array]') {
                  fn[1].apply(fn[0], fn[2]);
                } else {
                  fn();
                }

              }

              for (var i = 0; i < _framers.length; i++) {
                var fFn = _framers[i];
                fFn();
              }

              for (var n in _oneTimers) {
                if (_oneTimers.hasOwnProperty(n)) {
                  var v = _oneTimers[n];
                  v[0](v[1]);
                  delete _oneTimers[n];
                }
              }

              for (var n in _everies) {
                if (_everies.hasOwnProperty(n)) {
                  var v = _everies[n];
                  if (v.nextTime < ms) {
                    if (v.remove) {
                      if (v.nextTime > 0) {
                        v.fn();
                        delete _everies[n];
                      } else {
                        v.nextTime = ms + v.step;
                      }
                    } else {
                      v.fn();
                      v.nextTime = ms + v.step;
                    }
                  }
                  if (v.until) {
                    if (v.until < ms) {
                      delete _everies[n];
                    }
                  }
                }
              }

              frame(_callQueQue);
              lastMs = ms;
            };
            _callQueQue();
            _initDone = true;
          }
        });
        _myTrait_.once = function(key, fn, value) {
          // _oneTimers

          _oneTimers[key] = [fn, value];
        }
        _myTrait_.onFrame = function(fn) {

          _framers.push(fn);
        }
        _myTrait_.polyfill = function(t) {
          // --- let's not ---
        }
        _myTrait_.removeFrameFn = function(fn) {

          var i = _framers.indexOf(fn);
          if (i >= 0) {
            if (fn._onRemove) {
              fn._onRemove();
            }
            _framers.splice(i, 1);
            return true;
          } else {
            return false;
          }
        }
      }(this));
    }
    var later = function(a, b, c, d, e, f, g, h) {
      if (this instanceof later) {
        var args = [a, b, c, d, e, f, g, h];
        if (this.__factoryClass) {
          var m = this;
          var res;
          this.__factoryClass.forEach(function(initF) {
            res = initF.apply(m, args);
          });
          if (Object.prototype.toString.call(res) == '[object Function]') {
            if (res._classInfo.name != later._classInfo.name) return new res(a, b, c, d, e, f, g, h);
          } else {
            if (res) return res;
          }
        }
        if (this.__traitInit) {
          var m = this;
          this.__traitInit.forEach(function(initF) {
            initF.apply(m, args);
          })
        } else {
          if (typeof this.init == 'function')
            this.init.apply(this, args);
        }
      } else return new later(a, b, c, d, e, f, g, h);
    };
    later._classInfo = {
      name: 'later'
    };
    later.prototype = new later_prototype();
    if (typeof(window) != 'undefined') window['later'] = later;
    if (typeof(window) != 'undefined') window['later_prototype'] = later_prototype;;
    (function(_myTrait_) {
      _myTrait_.isArray = function(someVar) {
        return Object.prototype.toString.call(someVar) === '[object Array]';
      }
      _myTrait_.isFunction = function(fn) {
        return Object.prototype.toString.call(fn) == '[object Function]';
      }
      _myTrait_.isObject = function(obj) {
        return obj === Object(obj);
      }
    }(this));;
    (function(_myTrait_) {
      _myTrait_.all = function(firstArg) {

        var args;
        if (this.isArray(firstArg)) {
          args = firstArg;
        } else {
          args = Array.prototype.slice.call(arguments, 0);
        }
        // console.log(args);
        var targetLen = args.length,
          rCnt = 0,
          myPromises = [],
          myResults = new Array(targetLen);

        return this.then(
          function() {

            var allPromise = _promise();
            if (args.length == 0) {
              allPromise.resolve([]);
            }
            args.forEach(function(b, index) {
              if (b.then) {
                // console.log("All, looking for ", b, " state = ", b._state);
                myPromises.push(b);

                b.then(function(v) {
                  myResults[index] = v;
                  // console.log("Got a promise...",b, " cnt = ", rCnt);
                  rCnt++;
                  if (rCnt == targetLen) {
                    allPromise.resolve(myResults);
                  }
                }, function(v) {
                  allPromise.reject(v);
                });

              } else {
                allPromise.reject("Not list of promises");
              }
            })

            return allPromise;

          });





      }
      _myTrait_.collect = function(collectFn, promiseList, results) {

        var args;
        if (this.isArray(promiseList)) {
          args = promiseList;
        } else {
          args = [promiseList];
        }

        // console.log(args);
        var targetLen = args.length,
          isReady = false,
          noMore = false,
          rCnt = 0,
          myPromises = [],
          myResults = results || {};

        return this.then(
          function() {

            var allPromise = _promise();
            args.forEach(function(b, index) {
              if (b.then) {
                // console.log("All, looking for ", b, " state = ", b._state);
                myPromises.push(b);

                b.then(function(v) {
                  rCnt++;
                  isReady = collectFn(v, myResults);
                  if ((isReady && !noMore) || (noMore == false && targetLen == rCnt)) {
                    allPromise.resolve(myResults);
                    noMore = true;
                  }
                }, function(v) {
                  allPromise.reject(v);
                });

              } else {
                allPromise.reject("Not list of promises");
              }
            })

            return allPromise;

          });

      }
      _myTrait_.fail = function(fn) {
        return this.then(null, fn);
      }
      _myTrait_.fulfill = function(withValue) {
        // if(this._fulfilled || this._rejected) return;

        if (this._rejected) return;
        if (this._fulfilled && withValue != this._stateValue) {
          return;
        }

        var me = this;
        this._fulfilled = true;
        this._stateValue = withValue;

        var chCnt = this._childPromises.length;

        while (chCnt--) {
          var p = this._childPromises.shift();
          if (p._onFulfill) {
            try {
              var x = p._onFulfill(withValue);
              // console.log("Returned ",x);
              if (typeof(x) != "undefined") {
                p.resolve(x);
              } else {
                p.fulfill(withValue);
              }
            } catch (e) {
              // console.error(e);
              /*
                           If either onFulfilled or onRejected throws an exception e, promise2 
                           must be rejected with e as the reason.            
                       */
              p.reject(e);
            }
          } else {
            /*
                       If onFulfilled is not a function and promise1 is fulfilled, promise2 must be 
                       fulfilled with the same value as promise1        
                   */
            p.fulfill(withValue);
          }
        };
        // this._childPromises.length = 0;
        this._state = 1;
        this.triggerStateChange();

      }
      _myTrait_.genPlugin = function(fname, fn) {
        var me = this;
        this.plugin(fname,
          function() {
            var args = Array.prototype.slice.call(arguments, 0);
            console.log("Plugin args", args);
            var myPromise = _promise();
            this.then(function(v) {
              var args2 = Array.prototype.slice.call(arguments, 0);
              var z = args.concat(args2);
              var res = fn.apply(this, z);
              myPromise.resolve(res);
            }, function(r) {
              myPromise.reject(r);
            });
            return myPromise;

          }
        );
      }
      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
        _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
      _myTrait_.__traitInit.push(function(onFulfilled, onRejected) {
        // 0 = pending
        // 1 = fullfilled
        // 2 = error

        this._state = 0;
        this._stateValue = null;
        this._isAPromise = true;
        this._childPromises = [];

        if (this.isFunction(onFulfilled))
          this._onFulfill = onFulfilled;
        if (this.isFunction(onRejected))
          this._onReject = onRejected;

        if (!onRejected && this.isFunction(onFulfilled)) {



          var me = this;
          later().asap(
            function() {
              console.log("--- calling the onFulfilled ");
              onFulfilled(function(v) {
                me.resolve(v)
              }, function(v) {
                me.resolve(v);
              });
            });

        }
      });
      _myTrait_.isFulfilled = function(t) {
        return this._state == 1;
      }
      _myTrait_.isPending = function(t) {
        return this._state == 0;
      }
      _myTrait_.isRejected = function(v) {
        return this._state == 2;
      }
      _myTrait_.nodeStyle = function(fname, fn) {
        var me = this;
        this.plugin(fname,
          function() {
            var args = Array.prototype.slice.call(arguments, 0);
            var last, userCb, cbIndex = 0;
            if (args.length >= 0) {
              last = args[args.length - 1];
              if (Object.prototype.toString.call(last) == '[object Function]') {
                userCb = last;
                cbIndex = args.length - 1;
              }
            }

            var mainPromise = wishes().pending();
            this.then(function() {
              var nodePromise = wishes().pending();
              var args2 = Array.prototype.slice.call(arguments, 0);
              console.log("Orig args", args);
              console.log("Then args", args2);
              var z;
              if (args.length == 0)
                z = args2;
              if (args2.length == 0)
                z = args;
              if (!z) z = args2.concat(args);
              cbIndex = z.length; // 0,fn... 2
              if (userCb) cbIndex--;
              z[cbIndex] = function(err) {
                if (err) {
                  console.log("Got error ", err);
                  nodePromise.reject(err);
                  mainPromise.reject(err);
                  return;
                }
                if (userCb) {
                  var args = Array.prototype.slice.call(arguments);
                  var res = userCb.apply(this, args);
                  mainPromise.resolve(res);
                } else {
                  var args = Array.prototype.slice.call(arguments, 1);
                  mainPromise.resolve.apply(mainPromise, args);
                }
              }
              nodePromise.then(function(v) {
                mainPromise.resolve(v);
              });

              console.log("nodeStyle after concat", z);
              var res = fn.apply(this, z);
              // myPromise.resolve(res);
              // return nodePromise;
              return nodePromise;
            }, function(v) {
              mainPromise.reject(v);
            });
            return mainPromise;
            /*
                      log("..... now waiting "+ms);
                      var p = waitFor(ms);
                      p.then( function(v) {
                          myPromise.resolve(v);
                      });
                  */
          }
        );
      }
      _myTrait_.onStateChange = function(fn) {

        if (!this._listeners)
          this._listeners = [];

        this._listeners.push(fn);
      }
      _myTrait_.plugin = function(n, fn) {

        _myTrait_[n] = fn;

        return this;
      }
      _myTrait_.props = function(obj) {
        var args = [];

        for (var n in obj) {
          if (obj.hasOwnProperty(n)) {
            args.push({
              name: n,
              promise: obj[n]
            });
          }
        }


        // console.log(args);
        var targetLen = args.length,
          rCnt = 0,
          myPromises = [],
          myResults = {};

        return this.then(
          function() {

            var allPromise = wishes().pending();
            args.forEach(function(def) {
              var b = def.promise,
                name = def.name;
              if (b.then) {
                // console.log("All, looking for ", b, " state = ", b._state);
                myPromises.push(b);

                b.then(function(v) {
                  myResults[name] = v;
                  rCnt++;
                  if (rCnt == targetLen) {
                    allPromise.resolve(myResults);
                  }
                }, function(v) {
                  allPromise.reject(v);
                });

              } else {
                allPromise.reject("Not list of promises");
              }
            })

            return allPromise;

          });

      }
      _myTrait_.reject = function(withReason) {

        // if(this._rejected || this._fulfilled) return;

        // conso

        if (this._fulfilled) return;
        if (this._rejected && withReason != this._rejectReason) return;


        this._state = 2;
        this._rejected = true;
        this._rejectReason = withReason;
        var me = this;

        var chCnt = this._childPromises.length;
        while (chCnt--) {
          var p = this._childPromises.shift();

          if (p._onReject) {
            try {
              p._onReject(withReason);
              p.reject(withReason);
            } catch (e) {
              /*
                           If either onFulfilled or onRejected throws an exception e, promise2 
                           must be rejected with e as the reason.            
                       */
              p.reject(e);
            }
          } else {
            /*
                       If onFulfilled is not a function and promise1 is fulfilled, promise2 must be 
                       fulfilled with the same value as promise1        
                   */
            p.reject(withReason);
          }
        };

        // this._childPromises.length = 0;
        this.triggerStateChange();

      }
      _myTrait_.rejectReason = function(reason) {
        if (reason) {
          this._rejectReason = reason;
          return;
        }
        return this._rejectReason;
      }
      _myTrait_.resolve = function(x) {

        // console.log("Resolving ", x);

        // can not do this many times...
        if (this._state > 0) return;

        if (x == this) {
          // error
          this._rejectReason = "TypeError";
          this.reject(this._rejectReason);
          return;
        }

        if (this.isObject(x) && x._isAPromise) {

          // 
          this._state = x._state;
          this._stateValue = x._stateValue;
          this._rejectReason = x._rejectReason;
          // ... 
          if (this._state === 0) {
            var me = this;
            x.onStateChange(function() {
              if (x._state == 1) {
                // console.log("State change");
                me.resolve(x.value());
              }
              if (x._state == 2) {
                me.reject(x.rejectReason());
              }
            });
          }
          if (this._state == 1) {
            // console.log("Resolved to be Promise was fulfilled ", x._stateValue);
            this.fulfill(this._stateValue);
          }
          if (this._state == 2) {
            // console.log("Relved to be Promise was rejected ", x._rejectReason);
            this.reject(this._rejectReason);
          }
          return;
        }
        if (this.isObject(x) && x.then && this.isFunction(x.then)) {
          // console.log("Thenable ", x);
          var didCall = false;
          try {
            // Call the x.then
            var me = this;
            x.then.call(x,
              function(y) {
                if (didCall) return;
                // we have now value for the promise...
                // console.log("Got value from Thenable ", y);
                me.resolve(y);
                didCall = true;
              },
              function(r) {
                if (didCall) return;
                // console.log("Got reject from Thenable ", r);
                me.reject(r);
                didCall = true;
              });
          } catch (e) {
            if (!didCall) this.reject(e);
          }
          return;
        }
        this._state = 1;
        this._stateValue = x;

        // fulfill the promise...
        this.fulfill(x);

      }
      _myTrait_.state = function(newState) {
        if (typeof(newState) != "undefined") {
          this._state = newState;
        }
        return this._state;
      }
      _myTrait_.then = function(onFulfilled, onRejected) {

        if (!onRejected) onRejected = function() {};

        var p = new _promise(onFulfilled, onRejected);
        var me = this;

        if (this._state == 1) {
          later().asap(function() {
            me.fulfill(me.value());
          });
        }
        if (this._state == 2) {
          ater().asap(function() {
            me.reject(me.rejectReason());
          });
        }
        this._childPromises.push(p);
        return p;



      }
      _myTrait_.triggerStateChange = function(t) {
        var me = this;
        if (!this._listeners) return;
        this._listeners.forEach(function(fn) {
          fn(me);
        });
        // one-timer
        this._listeners.length = 0;
      }
      _myTrait_.value = function(v) {
        if (typeof(v) != "undefined") {
          this._stateValue = v;
          return this;
        }
        return this._stateValue;
      }
    }(this));
  }
  var _promise = function(a, b, c, d, e, f, g, h) {
    if (this instanceof _promise) {
      var args = [a, b, c, d, e, f, g, h];
      if (this.__factoryClass) {
        var m = this;
        var res;
        this.__factoryClass.forEach(function(initF) {
          res = initF.apply(m, args);
        });
        if (Object.prototype.toString.call(res) == '[object Function]') {
          if (res._classInfo.name != _promise._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (this.__traitInit) {
        var m = this;
        this.__traitInit.forEach(function(initF) {
          initF.apply(m, args);
        })
      } else {
        if (typeof this.init == 'function')
          this.init.apply(this, args);
      }
    } else return new _promise(a, b, c, d, e, f, g, h);
  };
  _promise._classInfo = {
    name: '_promise'
  };
  _promise.prototype = new _promise_prototype();
  if (typeof(window) != 'undefined') window['_promise'] = _promise;
  if (typeof(window) != 'undefined') window['_promise_prototype'] = _promise_prototype;
  var later_prototype = function() {;
    (function(_myTrait_) {
      var _initDone;
      var _callers;
      var _oneTimers;
      var _everies;
      var _framers;
      _myTrait_.add = function(fn, thisObj, args) {
        if (thisObj || args) {
          var tArgs;
          if (Object.prototype.toString.call(args) === '[object Array]') {
            tArgs = args;
          } else {
            tArgs = Array.prototype.slice.call(arguments, 2);
            if (!tArgs) tArgs = [];
          }
          _callers.push([thisObj, fn, tArgs]);
        } else {
          _callers.push(fn);
        }
      }
      _myTrait_.after = function(seconds, fn, name) {

        if (!name) {
          name = "time" + (new Date()).getTime() + Math.random(10000000);
        }

        _everies[name] = {
          step: Math.floor(seconds * 1000),
          fn: fn,
          nextTime: 0,
          remove: true
        };
      }
      _myTrait_.asap = function(fn) {
        this.add(fn);

      }
      _myTrait_.every = function(seconds, fn, name) {

        if (!name) {
          name = "time" + (new Date()).getTime() + Math.random(10000000);
        }

        _everies[name] = {
          step: Math.floor(seconds * 1000),
          fn: fn,
          nextTime: 0
        };
      }
      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
        _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
      _myTrait_.__traitInit.push(function(interval, fn) {
        if (!_initDone) {

          this.polyfill();

          var frame, cancelFrame;
          if (typeof(window) != "undefined") {
            var frame = window['requestAnimationFrame'],
              cancelFrame = window['cancelRequestAnimationFrame'];
            ['', 'ms', 'moz', 'webkit', 'o'].forEach(function(x) {
              if (!frame) {
                frame = window[x + 'RequestAnimationFrame'];
                cancelFrame = window[x + 'CancelAnimationFrame'] || window[x + 'CancelRequestAnimationFrame'];
              }
            });
          }

          if (!frame)
            frame = function(cb) {
              return setTimeout(cb, 16);
            };

          if (!cancelFrame)
            cancelFrame = function(id) {
              clearTimeout(id);
            };

          _callers = [];
          _oneTimers = {};
          _everies = {};
          _framers = [];
          var lastMs = 0;

          var _callQueQue = function() {
            var ms = (new Date()).getTime();
            var fn;
            while (fn = _callers.shift()) {
              if (Object.prototype.toString.call(fn) === '[object Array]') {
                fn[1].apply(fn[0], fn[2]);
              } else {
                fn();
              }

            }

            for (var i = 0; i < _framers.length; i++) {
              var fFn = _framers[i];
              fFn();
            }

            for (var n in _oneTimers) {
              if (_oneTimers.hasOwnProperty(n)) {
                var v = _oneTimers[n];
                v[0](v[1]);
                delete _oneTimers[n];
              }
            }

            for (var n in _everies) {
              if (_everies.hasOwnProperty(n)) {
                var v = _everies[n];
                if (v.nextTime < ms) {
                  if (v.remove) {
                    if (v.nextTime > 0) {
                      v.fn();
                      delete _everies[n];
                    } else {
                      v.nextTime = ms + v.step;
                    }
                  } else {
                    v.fn();
                    v.nextTime = ms + v.step;
                  }
                }
                if (v.until) {
                  if (v.until < ms) {
                    delete _everies[n];
                  }
                }
              }
            }

            frame(_callQueQue);
            lastMs = ms;
          };
          _callQueQue();
          _initDone = true;
        }
      });
      _myTrait_.once = function(key, fn, value) {
        // _oneTimers

        _oneTimers[key] = [fn, value];
      }
      _myTrait_.onFrame = function(fn) {

        _framers.push(fn);
      }
      _myTrait_.polyfill = function(t) {
        // --- let's not ---
      }
      _myTrait_.removeFrameFn = function(fn) {

        var i = _framers.indexOf(fn);
        if (i >= 0) {
          if (fn._onRemove) {
            fn._onRemove();
          }
          _framers.splice(i, 1);
          return true;
        } else {
          return false;
        }
      }
    }(this));
  }
  var later = function(a, b, c, d, e, f, g, h) {
    if (this instanceof later) {
      var args = [a, b, c, d, e, f, g, h];
      if (this.__factoryClass) {
        var m = this;
        var res;
        this.__factoryClass.forEach(function(initF) {
          res = initF.apply(m, args);
        });
        if (Object.prototype.toString.call(res) == '[object Function]') {
          if (res._classInfo.name != later._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (this.__traitInit) {
        var m = this;
        this.__traitInit.forEach(function(initF) {
          initF.apply(m, args);
        })
      } else {
        if (typeof this.init == 'function')
          this.init.apply(this, args);
      }
    } else return new later(a, b, c, d, e, f, g, h);
  };
  later._classInfo = {
    name: 'later'
  };
  later.prototype = new later_prototype();
  if (typeof(window) != 'undefined') window['later'] = later;
  if (typeof(window) != 'undefined') window['later_prototype'] = later_prototype;
  var svgPathParser_prototype = function() {
    var jsVectors_prototype = function() {;
      (function(_myTrait_) {
        var projectionMatrix;
        var jVect;
        var iVect;
        var pBase;
        var tn1;
        var nv1;
        var barCoeffs;
        var deVector;
        _myTrait_.add = function(v1, v2) {

          v1.x = v1.x + v2.x;
          v1.y = v1.y + v2.y;

        }
        _myTrait_.angleBetween = function(v1, v2) {

          var n1 = this.normalize({
            x: v1.x,
            y: v1.y
          });
          var n2 = this.normalize({
            x: v2.x,
            y: v2.y
          });

          var cp = this.crossProd(n1, n2);
          var dp = this.dotProd(n1, n2);

          var a = Math.acos(dp);
          if (cp < 0) a = a * -1; // other side...
          return a;

        }
        _myTrait_.calc_cat = function(t, p0, p1, p2, p3) {

          var t2 = t * t;
          var t3 = t2 * t;
          return (0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3));

        }
        _myTrait_.crossProd = function(v1, v2) {

          // U x V = Ux*Vy-Uy*Vx
          return v1.x * v2.y - v1.y * v2.x;

        }
        _myTrait_.diff = function(p1, p2) {

          return {
            x: p2.x - p1.x,
            y: p2.y - p1.y
          };

        }
        _myTrait_.dist = function(p1, p2) {

          var dx = p1.x - p2.x;
          var dy = p1.y - p2.y;
          return Math.sqrt(dx * dx + dy * dy);

        }
        _myTrait_.dotProd = function(v1, v2) {

          return v1.x * v2.x + v1.y * v2.y;

        }
        _myTrait_.getBarCoeffs = function(p0, p1, p2) {

          var bb = barCoeffs;
          bb.A = 1 / 2 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y);
          bb.sign = bb.A < 0 ? -1 : 1;
          bb.s1 = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y)) * bb.sign;
          bb.s2 = (p2.y - p0.y) * bb.sign;
          bb.s3 = (p0.x - p2.x) * bb.sign;
          bb.t1 = (p0.x * p1.y - p0.y * p1.x) * bb.sign;
          bb.t2 = (p0.y - p1.y) * bb.sign;
          bb.t3 = (p1.x - p0.x) * bb.sign;
          return bb;

        }
        if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
          _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
        if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
        _myTrait_.__traitInit.push(function(t) {

          if (!tn1) {

            tn1 = {
              x: 0,
              y: 0
            };
            nv1 = {
              x: 0,
              y: 0
            };

            projectionMatrix = [0, 0, 0, 0];

            jVect = {
              x: 0,
              y: 0
            };
            iVect = {
              x: 0,
              y: 0
            };
            pBase = {
              x: 0,
              y: 0
            };

            barCoeffs = {
              Area: 0,
              s1: 0,
              s2: 0,
              s3: 0,
              t1: 0,
              t2: 0,
              t3: 0,
              sign: 0
            };
            deVector = {
              x: 0,
              y: 0
            };

          }
        });
        _myTrait_.initProjection = function(p1, p2) {

          iVect.y = p2.y - p1.y;
          iVect.x = p2.x - p1.x;

          jVect.y = iVect.y;
          jVect.x = iVect.x;

          this.normalize(iVect);
          this.normalize(jVect);

          this.rotate(jVect, Math.PI / 2);

          pBase.x = p1.x;
          pBase.y = p1.y;


        }
        _myTrait_.length = function(p1) {

          var dx = p1.x;
          var dy = p1.y;
          return Math.sqrt(dx * dx + dy * dy);

        }
        _myTrait_.linesIntersect = function(p0, p1, v0, v1) {

          var x1 = p0.x,
            y1 = p0.y,
            x2 = p1.x,
            y2 = p1.y,
            x3 = v0.x,
            y3 = v0.y,
            x4 = v1.x,
            y4 = v1.y;

          var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
          var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
          if (isNaN(x) || isNaN(y)) {
            return false;
          } else {
            if (x1 >= x2) {
              if (!(x2 <= x && x <= x1)) {
                return false;
              }
            } else {
              if (!(x1 <= x && x <= x2)) {
                return false;
              }
            }
            if (y1 >= y2) {
              if (!(y2 <= y && y <= y1)) {
                return false;
              }
            } else {
              if (!(y1 <= y && y <= y2)) {
                return false;
              }
            }
            if (x3 >= x4) {
              if (!(x4 <= x && x <= x3)) {
                return false;
              }
            } else {
              if (!(x3 <= x && x <= x4)) {
                return false;
              }
            }
            if (y3 >= y4) {
              if (!(y4 <= y && y <= y3)) {
                return false;
              }
            } else {
              if (!(y3 <= y && y <= y4)) {
                return false;
              }
            }
          }
          return true;

        }
        _myTrait_.mirrorVector = function(v1, along, base) {

          // the direction tangent and normal are normalized and the vector is projected into it            
          tn1.x = along.x - base.x;
          tn1.y = along.y - base.y;
          nv1.x = -tn1.y;
          nv1.y = tn1.x;

          v1.x = v1.x - base.x;
          v1.y = v1.y - base.y;

          // if the 'j' or normal projection is positive, turn around
          if (this.dotProd(v1, nv1) > 0)
            this.rotate(nv1, Math.PI);

          this.normalize(tn1);
          this.normalize(nv1);

          // Create positive coordinates of the projection of the vector to the 'base' cordinates
          var nvProd = Math.abs(this.dotProd(v1, nv1));
          //             tnProd = Math.abs( this.dotProd(v1,tn1) );

          var tnProd = this.dotProd(v1, tn1);
          // then, project the length of the base vectors to get the new vector space
          v1.x = nv1.x * nvProd + tn1.x * tnProd,
          v1.y = nv1.y * nvProd + tn1.y * tnProd;

          v1.x += base.x;
          v1.y += base.y;

          return v1;

        }
        _myTrait_.normalize = function(v) {

          var len = Math.sqrt(v.x * v.x + v.y * v.y);

          if (len == 0) {
            throw "Error normalizing vector: the length of the vector was zero";
          }

          v.x = v.x / len;
          v.y = v.y / len;
          return v;

        }
        _myTrait_.opposeVector = function(v1, along) {


          // the direction tangent and normal are normalized and the vector is projected into it            
          tn1.x = along, x;
          tn1.y = along.y;
          nv1.x = -tn1.y;
          nv1.y = tn1.x;

          this.normalize(tn1);
          this.normalize(nv1);

          // Important: turn the tangent to opposing direction...
          this.rotate(tn1, Math.PI);

          // Create the projection of the vector to the 'base' cordinates
          var nvProd = Math.abs(jsMath.dotProd(v1, nv1)),
            tnProd = Math.abs(jsMath.dotProd(v1, tn1));

          // if the 'j' or normal projection is negative, turn around
          if (this.dotProd(v1, nv1) < 0)
            this.rotate(nv1, Math.PI);

          // then, project the length of the vector to get the new vector
          v1.x = nv1.x * nvProd + tn1.x * tnProd,
          v1.y = nv1.y * nvProd + tn1.y * tnProd;

          return v1;

        }
        _myTrait_.pointInTriangle = function(p, p0, p1, p2) {


          var A = 1 / 2 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y);
          var sign = A < 0 ? -1 : 1;
          var s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign;
          var t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign;

          return s > 0 && t > 0 && (s + t) < 2 * A * sign;


        }
        _myTrait_.pointInTriangleBc = function(p, bb) {

          var A = bb.A;
          var sign = bb.sign;
          var s = (bb.s1 + bb.s2 * p.x + bb.s3 * p.y);
          var t = (bb.t1 + bb.t2 * p.x + bb.t3 * p.y);

          return s > 0 && t > 0 && (s + t) < 2 * A * sign;


        }
        _myTrait_.project = function(vectorToProject) {


          var p = vectorToProject;

          pVector.x = p.x - pBase.x;
          pVector.y = p.y - pBase.y;

          prodResult.i = this.dotProd(pVector, iVect);
          prodResult.j = this.dotProd(pVector, jVect);

          return prodResult;

        }
        _myTrait_.rotate = function(v, angle) {


          var s = Math.sin(angle);
          var c = Math.cos(angle);

          var x = v.x,
            y = v.y;

          v.x = x * c + y * s;
          v.y = -x * s + y * c;

          return v;

        }
        _myTrait_.rotateAround = function(angle, v, around) {

          this.sub(v, around);
          this.rotate(v, angle);
          this.add(v, around);

        }
        _myTrait_.sub = function(v1, v2) {

          v1.x = v1.x - v2.x;
          v1.y = v1.y - v2.y;

        }
        _myTrait_.tangentNormal = function(v1, v2, v3) {


          var t1 = {};
          t1.x = v2.x - v1.x;
          t1.y = v2.y - v1.y;
          var t2 = {};
          t2.x = v3.x - v2.x;
          t2.y = v3.y - v2.y;

          var p = {
            x: t1.x + t2.x,
            y: t1.y + t2.y
          };
          return this.normalize(p);

        }
        _myTrait_.triangleArea = function(A, B, C) {


          var area = A.x * (B.y - C.y) +
            B.x * (C.y - A.y) +
            C.x * (A.y - B.y);

          return Math.abs(area / 2);

        }
        _myTrait_.triangleInTriangle = function(p0, p1, p2, q0, q1, q2) {


          var bb = this.getBarCoeffs(p0, p1, p2);

          if (this.pointInTriangleBc(q0, bb)) return true;
          if (this.pointInTriangleBc(q1, bb)) return true;
          if (this.pointInTriangleBc(q2, bb)) return true;

          var bb = this.getBarCoeffs(q0, q1, q2);

          if (this.pointInTriangleBc(p0, bb)) return true;
          if (this.pointInTriangleBc(p1, bb)) return true;
          if (this.pointInTriangleBc(p2, bb)) return true;


          if (this.linesIntersect(p0, p1, q0, q1)) return true;
          if (this.linesIntersect(p1, p2, q0, q1)) return true;
          if (this.linesIntersect(p2, p0, q0, q1)) return true;

          if (this.linesIntersect(p0, p1, q1, q2)) return true;
          if (this.linesIntersect(p1, p2, q1, q2)) return true;
          if (this.linesIntersect(p2, p0, q1, q2)) return true;

          if (this.linesIntersect(p0, p1, q2, q0)) return true;
          if (this.linesIntersect(p1, p2, q2, q0)) return true;
          if (this.linesIntersect(p2, p0, q2, q0)) return true;

          return false;

        }
        _myTrait_.unProject = function(projectedVector) {

          var p = projectedVector;
          deVector.x = p.i * iVect.x + p.j * jVect.x;
          deVector.y = p.i * iVect.y + p.j * jVect.y;

          deVector.x += pBase.x;
          deVector.y += pBase.y;
          return deVector;

        }
      }(this));
    }
    var jsVectors = function(a, b, c, d, e, f, g, h) {
      if (this instanceof jsVectors) {
        var args = [a, b, c, d, e, f, g, h];
        if (this.__factoryClass) {
          var m = this;
          var res;
          this.__factoryClass.forEach(function(initF) {
            res = initF.apply(m, args);
          });
          if (Object.prototype.toString.call(res) == '[object Function]') {
            if (res._classInfo.name != jsVectors._classInfo.name) return new res(a, b, c, d, e, f, g, h);
          } else {
            if (res) return res;
          }
        }
        if (this.__traitInit) {
          var m = this;
          this.__traitInit.forEach(function(initF) {
            initF.apply(m, args);
          })
        } else {
          if (typeof this.init == 'function')
            this.init.apply(this, args);
        }
      } else return new jsVectors(a, b, c, d, e, f, g, h);
    };
    jsVectors._classInfo = {
      name: 'jsVectors'
    };
    jsVectors.prototype = new jsVectors_prototype();
    if (typeof(window) != 'undefined') window['jsVectors'] = jsVectors;
    if (typeof(window) != 'undefined') window['jsVectors_prototype'] = jsVectors_prototype;;
    (function(_myTrait_) {
      var _parsedData;
      _myTrait_.drawPath = function(ctx, w, h) {
        var _firstX, _firstY, x, y;
        ctx.beginPath();
        this._all.forEach(function(cmd) {

          if (cmd.name == "M") {

            x = cmd.points[0];
            y = cmd.points[1];
            ctx.moveTo(x, y);

          }

          if (cmd.name == "m") {

            x = x + cmd.points[0];
            y = y + cmd.points[1];
            ctx.moveTo(x, y);

          }

          if (cmd.name == "q") {
            for (var s = 0; s < cmd.points.length; s += 4) {
              var p = cmd.points;
              var x0 = x + p[s + 0],
                y0 = y + p[s + 1];
              //x=x0; y=y0;
              var x1 = x + p[s + 2],
                y1 = y + p[s + 3];
              x = x1;
              y = y1;
              ctx.quadraticCurveTo(x0, y0, x1, y1, x2, y2);
            }
          }

          // Not relative coordinates... the algo is much simpler here...
          if (cmd.name == "Q") {
            var p = cmd.points,
              len = cmd.points.length;
            for (var s = 0; s < len; s += 4) {
              ctx.quadraticCurveTo(p[s + 0], p[s + 1], p[s + 2], p[s + 3]);
            }
          }

          if (cmd.name == "c") {
            for (var s = 0; s < cmd.points.length; s += 6) {
              var p = cmd.points;
              var x0 = x + p[s + 0],
                y0 = y + p[s + 1];
              //x=x0; y=y0;
              var x1 = x + p[s + 2],
                y1 = y + p[s + 3];
              // x=x1; y=y1;
              var x2 = x + p[s + 4],
                y2 = y + p[s + 5];
              x = x2;
              y = y2;
              ctx.bezierCurveTo(x0, y0, x1, y1, x2, y2);
            }
          }

          // Not relative coordinates... the algo is much simpler here...
          if (cmd.name == "C") {
            var p = cmd.points,
              len = cmd.points.length;
            for (var s = 0; s < len; s += 6) {
              ctx.bezierCurveTo(p[s + 0], p[s + 1], p[s + 2], p[s + 3], p[s + 4], p[s + 5]);
            }
          }
          if (cmd.name == "l") {
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points;
              var x0 = x + p[s + 0],
                y0 = y + p[s + 1];
              x = x0;
              y = y0;
              ctx.lineTo(x0, y0);
            }
          }

          if (cmd.name == "H") {
            for (var s = 0; s < cmd.points.length; s++) {
              var p = cmd.points;
              var x0 = p[s + 0];
              x = x0;
              ctx.lineTo(x0, y);
            }
          }

          if (cmd.name == "V") {
            for (var s = 0; s < cmd.points.length; s++) {
              var p = cmd.points;
              var y0 = p[s + 0];
              y = y0;
              ctx.lineTo(x, y0);
            }
          }


          if (cmd.name == "L") {
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points;
              var x0 = p[s + 0],
                y0 = p[s + 1];
              x = x0;
              y = y0;
              ctx.lineTo(x0, y0);
            }
          }

          if (cmd.name == "z") {
            ctx.closePath();
          }
        })


      }
      _myTrait_.findDimensions = function() {


        if (this._limits) return this._limits;

        var _firstX, _firstY;

        var _minX, _minY, _maxX, _maxY,
          x, y;

        var limits = function(x, y) {

          if (typeof(_minX) == "undefined") {
            _minX = x;
            _maxX = x;
            _minY = y;
            _maxY = y;
          }
          _minX = Math.min(_minX, x);
          _minY = Math.min(_minY, y);
          _maxX = Math.max(_maxX, x);
          _maxY = Math.max(_maxY, y);

        }

        this._all.forEach(function(cmd) {

          if (cmd.name == "M") {

            x = cmd.points[0];
            y = cmd.points[1];

            limits(x, y);

          }

          if (cmd.name == "m") {

            x = x + cmd.points[0];
            y = y + cmd.points[1];
            limits(x, y);

          }

          if (cmd.name == "c") {
            for (var s = 0; s < cmd.points.length; s += 6) {
              var p = cmd.points;
              var x0 = x + p[s + 0],
                y0 = y + p[s + 1];
              //x=x0; y=y0;
              var x1 = x + p[s + 2],
                y1 = y + p[s + 3];
              // x=x1; y=y1;
              var x2 = x + p[s + 4],
                y2 = y + p[s + 5];

              limits(x0, y0);
              limits(x1, y1);
              limits(x2, y2);
              x = x2;
              y = y2;

            }
          }

          if (cmd.name == "C") {
            var p = cmd.points,
              len = cmd.points.length;
            for (var s = 0; s < len; s += 6) {
              limits(p[s + 0], p[s + 1]);
              limits(p[s + 2], p[s + 3]);
              limits(p[s + 4], p[s + 5]);
            }
          }
          if (cmd.name == "l") {
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points;
              var x0 = x + p[s + 0],
                y0 = y + p[s + 1];
              x = x0;
              y = y0;
              limits(x, y);
            }
          }

          if (cmd.name == "L") {
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points;
              var x0 = p[s + 0],
                y0 = p[s + 1];
              x = x0;
              y = y0;
              limits(x, y);
            }
          }
        });

        // NOTE: in these SVG photos created by the potrace the y-axis
        // is reversed, so the maxY is actually the minY 
        this._limits = [_minX, _minY, _maxX, _maxY];
        return this._limits;

      }
      _myTrait_.fitPathInto = function(w, h) {


        // return;
        var dim = this.findDimensions();

        // console.log(dim);

        var allIn = true;
        for (var i = 0; i < 4; i++) {
          if (dim[i] < 0 || dim[i] > w) allIn = false;
        }
        //       if(allIn) return;

        var drawW = Math.abs(dim[2] - dim[0]),
          drawH = Math.abs(dim[3] - dim[1]);

        var flipY = false;
        // the biggest Y is lie -100 and smalles -800 then we should
        // flip the coordinates...
        if (Math.abs(dim[3]) < Math.abs(dim[1])) {
          flipY = true;
        }

        var scale1 = w / drawW,
          scale2 = h / drawH,
          transX = -dim[0],
          transY = -dim[1];

        var scaleX = Math.min(scale1, scale2),
          scaleY = scaleX;


        if (flipY) {
          scaleY = -scaleY;
          transY = -dim[3]; // for example if -100 => +100
        }

        var tx = function(x) {
          return (x + transX) * scaleX;
        }
        var ty = function(y) {
          return (y + transY) * scaleY;
        }

        this._all.forEach(function(cmd) {

          if (cmd.name == "M") {

            cmd.points[0] = tx(cmd.points[0]);
            cmd.points[1] = ty(cmd.points[1]);
          }
          if (cmd.name == "m") {
            cmd.points[0] *= scaleX;
            cmd.points[1] *= scaleY;

          }

          if (cmd.name == "L") {
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points;
              p[s + 0] = tx(p[s + 0]);
              p[s + 1] = ty(p[s + 1]);
            }
          }

          if (cmd.name == "c") {
            for (var s = 0; s < cmd.points.length; s += 6) {
              var p = cmd.points;
              p[s + 0] *= scaleX;
              p[s + 2] *= scaleX;
              p[s + 4] *= scaleX;
              p[s + 1] *= scaleY;
              p[s + 3] *= scaleY;
              p[s + 5] *= scaleY;
            }
          }

          // Not relative coordinates... the algo is much simpler here...
          if (cmd.name == "C") {
            var p = cmd.points,
              len = cmd.points.length;
            for (var s = 0; s < len; s += 6) {
              p[s + 0] = tx(p[s + 0]);
              p[s + 2] = tx(p[s + 2]);
              p[s + 4] = tx(p[s + 4]);
              p[s + 1] = ty(p[s + 1]);
              p[s + 3] = ty(p[s + 3]);
              p[s + 5] = ty(p[s + 5]);
            }
          }

          if (cmd.name == "Q") {
            var p = cmd.points,
              len = cmd.points.length;
            for (var s = 0; s < len; s += 4) {
              p[s + 0] = tx(p[s + 0]);
              p[s + 2] = tx(p[s + 2]);
              p[s + 1] = ty(p[s + 1]);
              p[s + 3] = ty(p[s + 3]);
            }
          }

          if (cmd.name == "l") {
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points;
              p[s + 0] *= scaleX;
              p[s + 1] *= scaleY;
            }
          }


        });

        this._limits = null;


      }
      _myTrait_.forCmds = function(fn) {
        this._all.forEach(fn);
      }
      _myTrait_.fromBezierArray = function(list) {



        var x, y, i, plen = list.length;

        var target = this._all;

        this._all = [];

        for (var i = 0; i < plen; i++) {

          var bez = list[i];

          if (i == 0) {
            var c = {
              name: "M",
              points: [
                bez.point_x(0), bez.point_y(0)
              ]
            };

            this._all.push(c);
          }
          var c = {
            name: "C",
            points: [
              bez.point_x(1), bez.point_y(1),
              bez.point_x(2), bez.point_y(2),
              bez.point_x(3), bez.point_y(3)
            ]
          };

          this._all.push(c);
        }

        this.saveToOriginals();

      }
      _myTrait_.getCommands = function(t) {
        return this._all;
      }
      _myTrait_.getPath = function(i) {

        return this._all[i];
      }
      _myTrait_.getSegmentCount = function(t) {

        var last = this._all.length;
        if (this._all[last - 1].name == "z") last--;

        return last;
      }
      _myTrait_.getSubPaths = function(t) {
        return this._subPaths;
      }
      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
        _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
      _myTrait_.__traitInit.push(function(w, h, intoDom) {
        this._activeCmd = null;
        this._all = [];
        this._stringLeft = "";

        this._original = null;

        this._x = 0;
        this._y = 0;

        if (!_parsedData) {
          _parsedData = {};
        }
      });
      _myTrait_.initCmd = function(n) {
        this._activeCmd = {
          name: n,
          points: []
        };
        this._all.push(this._activeCmd);
        return this._activeCmd;

      }
      _myTrait_.inverse = function(t) {
        var all = this.originals();

        var point = {
          x: 0,
          y: 0
        };

        var x, y, i, plen = all.length;

        this._all.reverse();

        var target = this._all;
        var all = this._all;

        var newCmds = [];

        var getPrevPoints = function(currCmd, prevCmd) {
          var res = [];
          var n = (currCmd.points.length / 2),
            i = currCmd.points.length - 4;
          while (n > 0) {
            if (n == 1) {
              if (!prevCmd) return res;
              i = prevCmd.points.length - 2;
              res.push(prevCmd.points[i]);
              res.push(prevCmd.points[i + 1]);
            } else {
              res.push(currCmd.points[i]);
              res.push(currCmd.points[i + 1]);
              i -= 2;
            }
            n--;
          }
          return res;
        };

        if (all[0].name == "z") {
          all.shift();
          // plen--;
        }

        for (var i = 0; i < plen; i++) {

          var cmd = all[i],
            tCmd = all[i],
            nextCmd = all[i + 1],
            prevCmd;

          if (!cmd) break;
          if (i > 0) prevCmd = all[i - 1];

          if (i == 0) {
            var ii = cmd.points.length - 2;
            var cc = {
              name: "M",
              points: [
                cmd.points[ii], cmd.points[ii + 1]
              ]
            };
            newCmds.push(cc);
          } else {
            var cc = {
              name: prevCmd.name,
              points: getPrevPoints(prevCmd, cmd)
            };
            newCmds.push(cc);
          }
        }

        var cc = {
          name: "z",
          points: []
        };
        newCmds.push(cc);

        // console.log(newCmds);

        this._all = newCmds;
      }
      _myTrait_.makePathAbsolute = function() {


        var _firstX, _firstY;
        var x, y,
          lastBx, lastBy,
          bNoBx = true;

        var firstSmoothPoint = function() {
          if (bNoBx) {
            lastBx = x;
            lastBy = y;
          }
          var dx = x - lastBx,
            dy = y - lastBy;
          return {
            x: x + dx,
            y: y + dy
          };
        }
        this._all.forEach(function(cmd) {

          if (cmd.name == "M") {
            x = cmd.points[0];
            y = cmd.points[1];
            bNoBx = true;
          }

          if (cmd.name == "L") {
            x = cmd.points[0];
            y = cmd.points[1];
            bNoBx = true;
          }

          if (cmd.name == "m") {

            x = x + cmd.points[0];
            y = y + cmd.points[1];

            cmd.points[0] = x;
            cmd.points[1] = y;
            cmd.name = "M";
            bNoBx = true;
          }

          if (cmd.name == "q") {
            for (var s = 0; s < cmd.points.length; s += 4) {
              var p = cmd.points;

              p[s + 0] = x + p[s + 0];
              p[s + 1] = y + p[s + 1];
              p[s + 2] = x + p[s + 2];
              p[s + 3] = y + p[s + 3];
              x = p[s + 2];
              y = p[s + 3];
              cmd.name = "Q";
            }
            bNoBx = true;
          }
          if (cmd.name == "C") {
            var p = cmd.points;
            lastBx = p[2];
            lastBy = p[3];

            x = p[4];
            y = p[5];
            bNoBx = false;
          }
          if (cmd.name == "c") {
            for (var s = 0; s < cmd.points.length; s += 6) {
              var p = cmd.points;

              p[s + 0] = x + p[s + 0];
              p[s + 1] = y + p[s + 1];
              p[s + 2] = x + p[s + 2];
              p[s + 3] = y + p[s + 3];
              p[s + 4] = x + p[s + 4];
              p[s + 5] = y + p[s + 5];
              x = p[s + 4];
              y = p[s + 5];
              lastBx = p[s + 2];
              lastBy = p[s + 3];
              cmd.name = "C";
            }
            bNoBx = false;
          }

          if (cmd.name == "S") {
            var p = cmd.points;
            var first = firstSmoothPoint();
            var newPoints = [];
            newPoints[0] = first.x;
            newPoints[1] = first.y;
            newPoints[2] = p[0];
            newPoints[3] = p[1];
            newPoints[4] = p[2];
            newPoints[5] = p[3];
            x = newPoints[4];
            y = newPoints[5];
            lastBx = newPoints[2];
            lastBy = newPoints[3];
            cmd.name = "C";
            cmd.points = newPoints;
            bNoBx = false;
          }
          if (cmd.name == "s") {
            var p = cmd.points;
            var first = firstSmoothPoint();
            var newPoints = [];
            newPoints[0] = first.x;
            newPoints[1] = first.y;
            newPoints[2] = x + p[0];
            newPoints[3] = y + p[1];
            newPoints[4] = x + p[2];
            newPoints[5] = y + p[3];
            x = newPoints[4];
            y = newPoints[5];
            lastBx = newPoints[2];
            lastBy = newPoints[3];
            cmd.name = "C";
            cmd.points = newPoints;
            bNoBx = false;
          }

          if (cmd.name == "h") {
            bNoBx = true;
            for (var s = 0; s < cmd.points.length; s++) {
              var p = cmd.points;
              var x0 = x + p[s + 0];
              x = x0;
              p[s + 0] = x0;
              cmd.points = [x0, y];
              cmd.name = "L";
              return;
            }
          }

          if (cmd.name == "H") {
            bNoBx = true;
            for (var s = 0; s < cmd.points.length; s++) {
              var p = cmd.points;
              var x0 = p[s + 0];
              x = x0;
              p[s + 0] = x0;
              cmd.points = [x0, y];
              cmd.name = "L";
              return;
            }
          }

          if (cmd.name == "V") {
            bNoBx = true;
            for (var s = 0; s < cmd.points.length; s++) {
              var p = cmd.points;
              //console.log("--- V ----");
              //console.log("Point cnt ", cmd.points.length);
              //console.log(p, "y : ",y, " delta :  ",p[s+0]);
              var y0 = p[s + 0];
              y = y0;
              //console.log("After add : ",y, "and y0 = ", y0);
              cmd.points = [x, y0];
              cmd.name = "L";
              //console.log(cmd);
              return;
            }
          }

          if (cmd.name == "v") {
            bNoBx = true;
            for (var s = 0; s < cmd.points.length; s++) {
              var p = cmd.points;
              var y0 = y + p[s + 0];
              y = y0;
              cmd.points = [x, y0];
              cmd.name = "L";
              return;
            }
          }



          if (cmd.name == "l") {
            bNoBx = true;
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points;
              var x0 = x + p[s + 0],
                y0 = y + p[s + 1];
              x = x0;
              y = y0;
              p[s + 0] = x0;
              p[s + 1] = y0;
              cmd.name = "L";
            }
          }
        })


      }
      _myTrait_.normalize = function() {

        this.makePathAbsolute();
        this.fitPathInto(800, 800);

      }
      _myTrait_.originals = function() {

        if (!this._original) {
          this._original = JSON.parse(JSON.stringify(this._all));
        }
        return this._original;

      }
      _myTrait_.parse = function(str) {
        /*var old;
           if(old = _parsedData[str]) {
               this._all = JSON.parse( old );
               return;
           }*/

        this._activeCmd = null;
        this._all = [];
        this._stringLeft = "";

        this._original = null;

        this._x = 0;
        this._y = 0;

        this._usedCommands = {};
        if (!str) str = "M25.979,12.896 L 5.979,12.896,5.979,19.562,25.979,19.562z";
        var c,
          leftString = str;
        var lastLen = 0;
        var maxCnt = 10000;


        this._subPaths = str.split("M");
        //console.log("Sub paths");
        //console.log(this._subPaths);

        this._subIndex = 0;

        while (leftString = this.popCommand(leftString)) {
          if (leftString.length == 0) break;
          if (leftString.length == lastLen) break;

          if (maxCnt-- < 0) break;

          lastLen = leftString.length;
        }

        // _parsedData[str] = JSON.stringify( this._all );

        // console.log("Used commands", this._usedCommands);
        return this._all;

      }
      _myTrait_.path = function() {

        return this._all;

      }
      _myTrait_.pathFunction = function(t) {
        /*
           this.initBezier();
           var ntCnt = this.getSegmentCount();
           var t1 = ntCnt * t;
           var t_index = Math.floor( t1 );
           var seg = this.getSegmentNro(t_index);
           var sub_t = t1 - t_index;
           
           // for example ntCnt = 10
           // t = 9,5
           var stepLen = 1 / ntCnt,        // 0,1
               nowStep = t_index / ntCnt,  // 0,9
               totStep = t,                // 0,95
               remStep = totStep - nowStep, // 0,05
               relStep = remStep / stepLen; // 0,05 / 0,1 = 0,5
           
           var bez = seg.bezier();
           // console.log("Rel step "+relStep);
           pathFnData.x = bez.x(relStep);
           pathFnData.y = bez.y(relStep);
           var nn = bez.tangent(relStep, true);
           
           pathFnData.normal.x = nn.x;
           pathFnData.normal.y = nn.y;
           
           fn(pathFnData);
           */
      }
      _myTrait_.popCommand = function(str) {


        //console.log("popCommand");
        //console.log(str);

        str = str.trim();

        var cmdStr = str.charAt(0),
          cmd = null;


        // console.log("Command : "+cmdStr);



        if (cmdStr == "M") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "m") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "Q") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "q") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "S") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "s") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "C") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "c") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "H") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "h") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "V") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "v") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "L") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "l") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "Z") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        if (cmdStr == "z") {
          cmd = this.initCmd(cmdStr);
          str = str.substring(1);
        }

        // Find the points....
        if (cmd) {

          this._usedCommands[cmdStr] = "true";
          str = str.trim();

          var ok = true;

          while (ok && str.length > 0) {

            var firstChar = str.charAt(0);
            if (firstChar == ",") {
              str = str.substring(1);
              str = str.trim();
            }
            var allowed = ["-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
            var collect = "",
              minusCnt = 0;

            while (allowed.indexOf(str.charAt(0)) >= 0) {
              if (str.charAt(0) == "-") {
                minusCnt++;
                if (minusCnt > 1) {
                  break;
                }
              }
              collect = collect + str.charAt(0);
              str = str.substring(1);
              minusCnt = 1;
            }

            // we have a number
            if (collect.length > 0) {
              //console.log("Found number "+collect);
              cmd.points.push(parseFloat(collect));
            } else {
              // nothing more there...
              //console.log("Did not find number from "+str);
              break;
            }
            str = str.trim();
          }
        }

        if (!cmd) {
          console.error("No command found for");
          console.error(str);
        }

        this._activeCmd = cmd;
        this._stringLeft = str;

        return str;


      }
      _myTrait_.relativePosition = function(t) {

        // perhaps faster would be to manage the bezier array directly...
        var list = this.toBezierArray();
        var ntCnt = list.length;

        var t1 = ntCnt * t;
        var t_index = Math.floor(t1);

        if (t_index >= ntCnt) t_index = ntCnt - 1;
        if (t_index < 0) t_index = 0;

        var bez = list[t_index];
        var sub_t = t1 - t_index;

        // for example ntCnt = 10
        // t = 9,5
        var stepLen = 1 / ntCnt, // 0,1
          nowStep = t_index / ntCnt, // 0,9
          totStep = t, // 0,95
          remStep = totStep - nowStep, // 0,05
          relStep = remStep / stepLen; // 0,05 / 0,1 = 0,5

        var pathFnData = {
          x: 0,
          y: 0,
          normal: {
            x: 0,
            y: 0
          }
        };
        pathFnData.x = bez.x(relStep);
        pathFnData.y = bez.y(relStep);
        var nn = bez.tangent(relStep, true);
        pathFnData.normal.x = nn.x;
        pathFnData.normal.y = nn.y;

        return pathFnData;
      }
      _myTrait_.replacePartWith = function(index, pathStr, invert) {
        var createQuatPath2 = function(str, invert) {
          var parser = svgPathParser();
          parser.parse(str);
          parser.makePathAbsolute();
          var list = parser.toBezierArray();
          parser.fromBezierArray(list);
          if (invert) parser.inverse();
          var qPath = parser.toQuaternionPath();

          var createQuatPath = function(startPoint, refVector) {

            var iter = pathIterator(qPath);
            var ep = iter.endPoint();
            var str = "M 0 0 " + iter.toSvgPath();
            var sp = startPoint;
            /*
                   var refVector = {
                       x : -100,
                       y : 100
                   };*/

            if (refVector.x == 0 && refVector.y == 0) return "";

            var len = Math.sqrt(ep.x * ep.x + ep.y * ep.y),
              refLen = Math.sqrt(refVector.x * refVector.x + refVector.y * refVector.y),
              scale = refLen / len;
            if (len == 0) return str;
            var math = jsVectors();
            var angle = math.angleBetween(ep, refVector);
            // var angle = math.angleBetween(  refVector, ep );
            var str = iter.toSvgPath(sp, quaternion().rotate(angle), function(p) {
              p.d = p.d * scale;
              return p;
            });
            return str;
          }
          return createQuatPath;
        }

        var ppp = this.getPath(index);
        ppp.replaceFunction = createQuatPath2(pathStr, invert);

      }
      _myTrait_.saveToOriginals = function() {

        this._original = JSON.parse(JSON.stringify(this._all));

      }
      _myTrait_.scaleFactor = function(w, h) {

        var dim = this.findDimensions();

        var drawW = Math.abs(dim[2] - dim[0]),
          drawH = Math.abs(dim[3] - dim[1]);

        var scale1 = w / drawW,
          scale2 = h / drawH;
        var x, y;

        var scale = Math.min(scale1, scale2);

        return scale;

      }
      _myTrait_.svgString = function(t) {
        var _firstX, _firstY, x, y,
          str = "";

        //console.log("ALL ");
        //console.log(this._all);
        this._all.forEach(function(cmd) {

          if (cmd.name == "M") {

            x = cmd.points[0];
            y = cmd.points[1];
            str += "M" + x + "," + y + " ";

          }

          if (cmd.name == "m") {

            x = x + cmd.points[0];
            y = y + cmd.points[1];
            str += "M" + x + "," + y + " ";
          }

          if (cmd.name == "q") {

            str += "Q";
            for (var s = 0; s < cmd.points.length; s += 4) {
              var p = cmd.points;
              var x0 = x + p[s + 0],
                y0 = y + p[s + 1];
              //x=x0; y=y0;
              var x1 = x + p[s + 2],
                y1 = y + p[s + 3];
              x = x1;
              y = y1;
              str += x0 + "," + y0 + " " + x1 + "," + y1 + " ";
            }
          }

          // Not relative coordinates... the algo is much simpler here...
          if (cmd.name == "Q") {
            var p = cmd.points,
              len = cmd.points.length;
            str += "Q";
            for (var s = 0; s < len; s += 4) {
              var x0 = p[s + 0],
                y0 = p[s + 1];
              var x1 = p[s + 2],
                y1 = p[s + 3];
              x = x1;
              y = y1;
              str += x0 + "," + y0 + " " + x1 + "," + y1 + " ";
            }
          }

          if (cmd.name == "c") {
            str += "C";
            for (var s = 0; s < cmd.points.length; s += 6) {
              var p = cmd.points;
              var x0 = x + p[s + 0],
                y0 = y + p[s + 1];
              //x=x0; y=y0;
              var x1 = x + p[s + 2],
                y1 = y + p[s + 3];
              // x=x1; y=y1;
              var x2 = x + p[s + 4],
                y2 = y + p[s + 5];
              x = x2;
              y = y2;
              str += x0 + "," + y0 + " " + x1 + "," + y1 + " " + x2 + "," + y2 + " ";
            }
          }

          // Not relative coordinates... the algo is much simpler here...
          if (cmd.name == "C") {

            var p = cmd.points,
              len = cmd.points.length;

            if (cmd.replaceFunction) {
              var sp = {
                x: x,
                y: y
              };
              for (var s = 0; s < len; s += 6) {
                // str+=p[s+0]+","+p[s+1]+" "+p[s+2]+","+p[s+3]+" "+p[s+4]+","+p[s+5]+" ";
                x = p[s + 4];
                y = p[s + 5];
              }
              var ref = {
                x: x - sp.x,
                y: y - sp.y
              }
              var strR = cmd.replaceFunction(sp, ref);
              console.log("The inserted path ", strR);
              str += " " + strR + " ";
            } else {
              str += "C";
              for (var s = 0; s < len; s += 6) {
                str += p[s + 0] + "," + p[s + 1] + " " + p[s + 2] + "," + p[s + 3] + " " + p[s + 4] + "," + p[s + 5] + " ";
                x = p[s + 4];
                y = p[s + 5];
              }
            }
          }
          if (cmd.name == "l") {
            str += "L";
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points;
              var x0 = x + p[s + 0],
                y0 = y + p[s + 1];
              x = x0;
              y = y0;
              str += x0 + "," + y0 + " ";
            }
          }

          if (cmd.name == "H") {
            str += "L";
            for (var s = 0; s < cmd.points.length; s++) {
              var p = cmd.points;
              var x0 = p[s + 0];
              x = x0;
              // ctx.lineTo( x0, y );
              str += x0 + "," + y + " ";
            }
          }

          if (cmd.name == "V") {
            str += "L";
            for (var s = 0; s < cmd.points.length; s++) {
              var p = cmd.points;
              var y0 = p[s + 0];
              y = y0;
              // ctx.lineTo( x, y0 );
              str += x + "," + y0 + " ";
            }
          }


          if (cmd.name == "L") {

            if (cmd.replaceFunction) {
              var sp = {
                x: x,
                y: y
              };
              for (var s = 0; s < cmd.points.length; s += 2) {
                var p = cmd.points;
                var x0 = p[s + 0],
                  y0 = p[s + 1];
                x = x0;
                y = y0;
              }
              var ref = {
                x: x - sp.x,
                y: y - sp.y
              }
              var strR = cmd.replaceFunction(sp, ref);
              console.log("The inserted path ", strR);
              str += " " + strR + " ";
            } else {
              str += "L";
              for (var s = 0; s < cmd.points.length; s += 2) {
                var p = cmd.points;
                var x0 = p[s + 0],
                  y0 = p[s + 1];
                x = x0;
                y = y0;
                // ctx.lineTo( x0,y0 );
                str += x0 + "," + y0 + " ";
              }
            }
          }

          if (cmd.name == "z") {
            str += "z";
          }
        });
        return str;


      }
      _myTrait_.toBezierArray = function(t) {
        var _firstX, _firstY, x, y,
          str = "",
          res = [];
        this._all.forEach(function(cmd) {

          if (cmd.name == "M") {

            x = cmd.points[0];
            y = cmd.points[1];

          }

          // Not relative coordinates... the algo is much simpler here...
          if (cmd.name == "Q") {
            var p = cmd.points,
              len = cmd.points.length;
            for (var s = 0; s < len; s += 4) {
              var x0 = p[s + 0],
                y0 = p[s + 1];
              var x1 = p[s + 2],
                y1 = p[s + 3];

              var bc = new jsBezierCurve();
              bc.fromQuadCurve({
                x: x,
                y: y
              }, {
                x: x0,
                y: y0
              }, {
                x: x1,
                y: y1
              });
              res.push(bc);
              x = x1;
              y = y1;
            }
          }

          // Not relative coordinates... the algo is much simpler here...
          if (cmd.name == "C") {
            var p = cmd.points,
              len = cmd.points.length;
            for (var s = 0; s < len; s += 6) {

              var x0 = p[s + 0],
                y0 = p[s + 1];
              var x1 = p[s + 2],
                y1 = p[s + 3];
              var x2 = p[s + 4],
                y2 = p[s + 5];
              var bc = new jsBezierCurve();
              bc.fromPoints({
                x: x,
                y: y
              }, {
                x: x0,
                y: y0
              }, {
                x: x1,
                y: y1
              }, {
                x: x2,
                y: y2
              });
              res.push(bc);
              x = x2;
              y = y2;
            }
          }


          if (cmd.name == "L") {
            str += "L";
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points;
              var x0 = p[s + 0],
                y0 = p[s + 1];
              var bc = new jsBezierCurve();
              bc.fromLine({
                x: x,
                y: y
              }, {
                x: x0,
                y: y0
              });
              res.push(bc);

              x = x0;
              y = y0;
            }
          }

        });
        return res;


      }
      _myTrait_.toQuaternionPath = function(t) {

        var isFirstPoint = true;
        var pv = {
          x: 0,
          y: 0
        };
        var dv = {
          x: 100,
          y: 0
        };
        var lastDv = {
          x: 100,
          y: 0
        };

        var matLib = jsVectors();

        var cmdList = [];

        // {"name":"L","points":[374.29469458855607,171.03419547847162]}
        this.forCmds(function(c) {
          //  main.div().text(JSON.stringify(c));
          var v = {};
          var cmd = {
            cmd: c.name,
            path: []
          };

          var pickQuat = function(x, y) {

            dv.x = x - pv.x;
            dv.y = y - pv.y;
            var dist = Math.sqrt(dv.x * dv.x + dv.y * dv.y);
            if (dist == 0) {
              dv.x += 0.2;
              dv.y += 0.2;
              x += 0.02;
              y += 0.02;
              dist = Math.sqrt(dv.x * dv.x + dv.y * dv.y);
            }
            var r = matLib.angleBetween(lastDv, dv);


            var q = quaternion();
            q.setFromAxisRotation({
              x: 0,
              y: 0,
              z: 1
            }, r);

            if (!isFirstPoint) cmd.path.push({
              q: q,
              d: dist
            });
            isFirstPoint = false;
            pv.x = x;
            pv.y = y;
            lastDv.x = dv.x;
            lastDv.y = dv.y;

          }

          if (c.name == "M") {
            pickQuat(c.points[0], c.points[1]);
          }
          if (c.name == "L") {
            pickQuat(c.points[0], c.points[1]);
          }
          if (c.name == "Q") {
            pickQuat(c.points[0], c.points[1]);
            pickQuat(c.points[2], c.points[3]);
          }
          if (c.name == "C") {
            pickQuat(c.points[0], c.points[1]);
            pickQuat(c.points[2], c.points[3]);
            pickQuat(c.points[4], c.points[5]);
          }
          if (cmd.path.length) cmdList.push(cmd);
        });

        return cmdList;
      }
      _myTrait_.transformPoints = function(fn) {


        // creates a backup of the "all" and then uses the "all" as target
        var all = this.originals();

        var point = {
          x: 0,
          y: 0
        };

        var x, y, i, plen = all.length;

        var target = this._all;


        for (var i = 0; i < plen; i++) {

          var cmd = all[i],
            tCmd = this._all[i];

          if (!cmd) return;


          if (cmd.name == "M") {
            point.x = cmd.points[0];
            point.y = cmd.points[1];
            fn(point);
            tCmd.points[0] = point.x;
            tCmd.points[1] = point.y;

          }

          if (cmd.name == "Q") {
            var p = cmd.points,
              tp = tCmd.points,
              len = cmd.points.length;
            for (var s = 0; s < len; s += 4) {

              point.x = p[s + 0], point.y = p[s + 1];
              fn(point);
              tp[s + 0] = point.x, tp[s + 1] = point.y;

              point.x = p[s + 2], point.y = p[s + 3];
              fn(point);
              tp[s + 2] = point.x, tp[s + 3] = point.y;

            }
          }


          if (cmd.name == "C") {
            var p = cmd.points,
              tp = tCmd.points,
              len = cmd.points.length;
            for (var s = 0; s < len; s += 6) {

              point.x = p[s + 0], point.y = p[s + 1];
              fn(point);
              tp[s + 0] = point.x, tp[s + 1] = point.y;

              point.x = p[s + 2], point.y = p[s + 3];
              fn(point);
              tp[s + 2] = point.x, tp[s + 3] = point.y;

              point.x = p[s + 4], point.y = p[s + 5];
              fn(point);
              tp[s + 4] = point.x, tp[s + 5] = point.y;
            }
          }
          if (cmd.name == "L") {
            for (var s = 0; s < cmd.points.length; s += 2) {
              var p = cmd.points,
                tp = tCmd.points;
              point.x = p[s + 0], point.y = p[s + 1];
              fn(point);
              tp[s + 0] = point.x, tp[s + 1] = point.y;
            }
          }

        }




      }
    }(this));
  }
  var svgPathParser = function(a, b, c, d, e, f, g, h) {
    if (this instanceof svgPathParser) {
      var args = [a, b, c, d, e, f, g, h];
      if (this.__factoryClass) {
        var m = this;
        var res;
        this.__factoryClass.forEach(function(initF) {
          res = initF.apply(m, args);
        });
        if (Object.prototype.toString.call(res) == '[object Function]') {
          if (res._classInfo.name != svgPathParser._classInfo.name) return new res(a, b, c, d, e, f, g, h);
        } else {
          if (res) return res;
        }
      }
      if (this.__traitInit) {
        var m = this;
        this.__traitInit.forEach(function(initF) {
          initF.apply(m, args);
        })
      } else {
        if (typeof this.init == 'function')
          this.init.apply(this, args);
      }
    } else return new svgPathParser(a, b, c, d, e, f, g, h);
  };
  svgPathParser._classInfo = {
    name: 'svgPathParser'
  };
  svgPathParser.prototype = new svgPathParser_prototype();
  if (typeof(window) != 'undefined') window['svgPathParser'] = svgPathParser;
  if (typeof(window) != 'undefined') window['svgPathParser_prototype'] = svgPathParser_prototype;;
  (function(_myTrait_) {
    var _initDone;
    var _imageCache;
    var _isLoading;
    var _urlCallBacks;
    if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
      _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
    if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
    _myTrait_.__traitInit.push(function(data) {

      if (!_initDone) {
        _imageCache = {};
        _isLoading = {};
        _urlCallBacks = {};
        _initDone = true;
      }


    });
    _myTrait_.promiseImage = function(url) {
      var p = _promise();

      if (_imageCache[url]) {
        p.resolve(_imageCache[url]);
        _isLoading[url] = false;
        return p;
      }

      if (!_urlCallBacks[url]) _urlCallBacks[url] = [];
      _urlCallBacks[url].push(p);
      if (_isLoading[url]) {
        return p;
      }
      _isLoading[url] = true;
      var _img = new Image();
      _img.addEventListener("load", function() {
        _imageCache[url] = _img;
        var p;
        while (p = _urlCallBacks[url].pop()) {
          p.resolve(_img);
        }
        _isLoading[url] = false;
      });
      _img.src = url;

      return p;

    }
  }(this));;
  (function(_myTrait_) {
    _myTrait_.guid = function(t) {
      return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    }
    _myTrait_.isArray = function(someVar) {
      return Object.prototype.toString.call(someVar) === '[object Array]';
    }
    _myTrait_.isFunction = function(fn) {
      return Object.prototype.toString.call(fn) == '[object Function]';
    }
    _myTrait_.isObject = function(obj) {
      return obj === Object(obj);
    }
    _myTrait_.isStream = function(obj) {

      // v instanceof Bacon.Observable
      if (typeof(Bacon) != "undefined") {

        if (this.isObject(obj) && (obj instanceof Bacon.Observable)) {
          return true;
        }

      }

      /*
           if(typeof(RxJS) !="undefined") {
               if(obj instanceof RxJS) return true;
           }
           if(typeof(Bacon) !="undefined") {
               if(obj instanceof Bacon) return true;
           }
           */

      return false;
    }
    _myTrait_.str = function(params) {

      var args;
      if (this.isArray(params)) {
        args = params;
      } else {
        args = Array.prototype.slice.call(arguments);
      }

      // Supports Bacon.js streams at the moment...
      var bHadStream = false,
        me = this;
      var indexes = [],
        streams = [],
        all = [];
      args.forEach(function(item, i) {
        if (me.isStream(item)) {
          bHadStream = true;
          all.push("");
        } else {
          all.push(item);
        }
      });
      if (!bHadStream) return args.join("");

      return Bacon.fromBinder(function(sink) {

        args.forEach(function(item, i) {
          if (me.isStream(item)) {
            item.onValue(function(v) {
              all[i] = v;
              sink(all.join(""));
            })
          }
        });

        later().add(function() {
          sink(all.join(""));
        });

        return function() {

        };
      });



    }
  }(this));;
  (function(_myTrait_) {
    _myTrait_.add = function(childContext, insertObj) {

      if (insertObj) {
        if (!this.hasOwnProperty("_inserts")) {
          this._inserts = {};
        }
        if (!this._inserts[childContext])
          this._inserts[childContext] = [];
        insertObj.parent(this);
        this._inserts[childContext].push(insertObj);
        return;
      } else {
        this.add("children", childContext);
      }
      /*
           if(!this.hasOwnProperty("_children")) {
               this._children = [];
           }
           this._children.push(childContext);
           */
    }
    _myTrait_.addClipMask = function(obj) {
      if (!this.hasOwnProperty("_clipMasks")) {
        this._clipMasks = [];
      }
      this._clipMasks.push(obj);
    }
    _myTrait_.autoRender = function(t) {
      if (this._autoRender) return;
      var me = this;
      this._autoRender = true;
      later().every(1 / 60, function() {
        if (me.isDirty()) {
          me.reset();
          me.exec();
          me.isDirty(false);
        }
      });
    }
    _myTrait_.clear = function(t) {
      this._commands = [];
      this._inserts = {};
    }
    _myTrait_.createColorIndex = function(t) {

      return ocColorIndex();
    }
    _myTrait_.createHandle = function(options) {

      if (!this._colorIndex) {
        this._colorIndex = this.createColorIndex();
      }

      var index = this._colorIndex;

      // defining the color is there important...
      var createHandle = function(mainCtx, x, y, shape, color, myObj) {
        var ctx = mainCtx.create("handleCtx");
        ctx.save();
        ctx.beginPath();
        // ctx.translate(x,y);
        myObj._x = x,
        myObj._y = y;
        myObj.ctx = ctx;
        myObj.color = color;
        myObj.position = ctx.create("position");
        myObj.position.translate(x, y);
        ctx.insert("shape");
        ctx.add("shape", shape);
        ctx.fillStyle(color);
        ctx.fill();
        ctx.restore();
        ctx.stroke();
        index.add(color, myObj);
      }

      var handleObj = _e();

      createHandle(this,
        options.x || 0,
        options.y || 0,
        options.shape,
        options.color,
        options.obj);

      var me = this;

      handleObj._handleData = options;

      options.obj.handleObj = handleObj;

      handleObj.moveToPoint = function(p) {
        options.obj.position.replace("translate", p.x, p.y);
      }

      if (!this._dragSet && this._canvas) {

        var can = this._canvas;
        this._dragSet = true;
        var dO;
        can.draggable(function(o, dv) {
          dO = index.find(me.getPixel(dv.x, dv.y));
          if (dO) {
            var handleObj = dO.handleObj;
            dO.ctx.replace("fillStyle", "yellow");
            handleObj.trigger("startdrag", dv);
          }
        }, function(o, dv) {
          if (dO) {
            var handleObj = dO.handleObj;
            dO.position.replace("translate", dO._x + dv.dx, dO._y + dv.dy);
            dO.ctx.replace("fillStyle", "yellow");
            handleObj.trigger("drag", dv);
          }
        }, function(o, dv) {
          if (dO) {
            var handleObj = dO.handleObj;
            // dO.position.replace("translate", dO._x + dv.dx, dO._y + dv.dy );
            dO.ctx.replace("fillStyle", dO.color);
            dO._x = dO._x + dv.dx;
            dO._y = dO._y + dv.dy;
            handleObj.trigger("enddrag", dv);
          }
        });
      }

      return handleObj;
    }
    _myTrait_.exec = function(ctx, parentTrans) {
      if (!ctx) ctx = this._ctx;

      if (ctx._ctx) ctx = ctx._ctx;

      var me = this;
      this._commands.forEach(function(f) {
        var fn = f[0];
        var args = f[1];

        if (fn == "circle") {
          var cx = args[0],
            cy = args[1],
            radius = args[2];
          ctx.arc(cx, cy, radius, 0, 2 * Math.PI, false);
          return;
        }

        if (fn == "drawImage") {
          // ...
          var imgSrc = args[0];
          if (imgSrc === Object(imgSrc)) {
            // for canvas this should be quite ok....
            ctx[fn].apply(ctx, args);
          } else {
            // load the image...
            // console.log("Loading image", imgSrc)
            me.promiseImage(imgSrc)
              .then(function(im) {
                console.log("image loaded ok");
                console.log(im);
                console.log(typeof(im));
                args[0] = im;
                ctx[fn].apply(ctx, args);

              });
          }


          return;
        }


        if (fn == "insert") {
          me.forInserts(args[0], function(ch) {
            ch.exec(ctx);
          });
          return;
        }

        if (fn == "clipMask") {
          me.forClipMasks(function(ch) {
            ch.exec(ctx);
          });
          return;
        }

        if (fn == "children") {
          me.forChildren(function(ch) {
            ch.exec(ctx);
          });
          return;
        }
        if (fn == "setProperty") {
          var pName = args[0],
            pValue = args[1];
          ctx[pName] = pValue;
          //         ctx.globalAlpha = args[0];
        } else {
          if (ctx[fn]) ctx[fn].apply(ctx, args);
        }
      });

    }
    _myTrait_.execFn = function(cbFn, parentTrans) {

      var trans = parentTrans || this._transform;
      if (!parentTrans) trans.reset();
      var me = this;

      this._commands.forEach(function(f) {
        var fn = f[0];
        var args = f[1];


        if (fn == "insert") {
          me.forInserts(args[0], function(ch) {
            ch.execFn(cbFn, trans);
          });
          return;
        }

        if (fn == "clipMask") {
          me.forClipMasks(function(ch) {
            ch.execFn(cbFn, trans);
          });
          return;
        }

        if (fn == "children") {
          me.forChildren(function(ch) {
            ch.execFn(cbFn, trans);
          });
          return;
        }

        if (fn == "setProperty") {
          var pName = args[0],
            pValue = args[1];
          cbFn(pName, args, trans);

          if (trans[pName]) {
            trans[pName].apply(trans, [pValue]);
          }
        } else {
          // Get the point start position

          if (trans[fn]) {
            trans[fn].apply(trans, args);
          }

          cbFn(fn, args, trans);

        }
      });


    }
    _myTrait_.forChildren = function(fn) {

      this.forInserts("children", fn);
    }
    _myTrait_.forClipMasks = function(fn) {
      this.forInserts("clipMask", fn);
    }
    _myTrait_.forInserts = function(name, fn) {
      if (this._inserts && this._inserts[name]) {
        this._inserts[name].forEach(fn);
      }
    }
    _myTrait_.getPixel = function(x, y) {

      if (!this._ctx) return null;

      data = this._ctx.getImageData(x, y, 1, 1).data;
      if (!data) return null;

      return {
        x: x,
        y: y,
        r: data[0],
        g: data[1],
        b: data[2],
        a: data[3]
      };

    }
    if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
      _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
    if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
    _myTrait_.__traitInit.push(function(ctx) {
      if (!this._commands) {
        this._commands = [];
      }
      this._undoBuffer = [];
      this._ctx = ctx;
      this._transform = new ocTransform();

      var me = this;

      var draw_cmds = [
        "rect", "fillRect", "strokeRect", "clearRect",
        "fill", "stroke", "beginPath", "moveTo", "closePath", "lineTo", "clip", "quadraticCurveTo",
        "bezierCurveTo", "arc", "arcTo",
        "scale", "rotate", "translate", "transform", "setTransform",
        "fillText", "strokeText",
        "createImageData", "putImageData",
        "drawImage",
        "circle",
        "save", "restore",
        "setTransform"
      ];

      var get_cmds = ["createLinearGradient", "createPattern", "createRadialGradient", "addColorStop",
        "isPointInPath", "measureText", "getImageData", "toDataURL"
      ];

      var r_props = ["width", "height", "data"];
      var rw_props = ["globalAlpha", "fillStyle", "strokeStyle", "shadowColor", "shadowBlur", "shadowOffsetX",
        "shadowOffsetY",
        "font", "textAlign", "textBaseline",
        "lineCap", "lineJoin", "lineWidth", "miterLimit"
      ];

      var time = (new Date()).getTime();

      later().onFrame(function() {
        time = (new Date()).getTime();
      });


      me["insert"] = function() {
        var args = Array.prototype.slice.call(arguments);
        me._commands.push([
          "insert",
          args,
          time
        ]);
        return this;
      }

      me["create"] = function() {
        var args = Array.prototype.slice.call(arguments);
        me._commands.push([
          "insert",
          args,
          time
        ]);
        var cc = canvasContext();
        me.add(args[0], cc);
        return cc;
      }

      me["clipMask"] = function() {
        me.insert("clipMask");
        return;
      }

      me["children"] = function() {
        me.insert("children");
        return this;
      }


      draw_cmds.forEach(function(fname) {
        me[fname] = function() {
          me._undoBuffer = [];
          var args = Array.prototype.slice.call(arguments);
          /*
        args.forEach( function(arg, i) {
            if(me.isStream(arg)) {
                args[i] = null; // Not ready to draw
                arg.onValue( function(v) {
                    args[i] = v;
                });
            }
        });
        */

          me._commands.push([
            fname,
            args,
            time
          ]);
          return this;
        }
      });

      get_cmds.forEach(function(fname) {
        me[fname] = function() {
          var args = Array.prototype.slice.call(arguments);
          return ctx[fname].apply(ctx, args);
        }
      });

      r_props.forEach(function(fname) {
        me[fname] = function() {
          return me._ctx[fname];
        }
      });

      rw_props.forEach(function(fname) {
        me[fname] = function(v) {
          if (typeof(v) != "undefined") {
            // me._ctx[fname] = v;
            var argArr = [fname, v];

            console.log("Setting value to ", fname);

            if (me.isStream(v)) {
              var cmd = [
                "waitValue",
                argArr,
                time
              ];
              argArr[1] = null; // Not ready to draw
              v.onValue(function(value) {
                cmd[0] = "setProperty";
                argArr[1] = value;
              });
              me._commands.push(cmd);
            } else {
              me._commands.push([
                "setProperty",
                argArr,
                time
              ]);
            }
            return me;
          }
          return me._ctx[fname];
        }
      });


      /*

save()	Saves the state of the current context
restore()	Returns previously saved path state and attributes
createEvent()	 
getContext()	 
toDataURL()	 

createImageData()	Creates a new, blank ImageData object
getImageData()	Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
putImageData()	Puts the image data (from a specified ImageData object) back onto the canvas

width	Returns the width of an ImageData object
height	Returns the height of an ImageData object
data	Returns an object that contains image data of a specified ImageData object

fillText()	Draws "filled" text on the canvas
strokeText()	Draws text on the canvas (no fill)
measureText()	Returns an object that contains the width of the specified text

font	Sets or returns the current font properties for text content
textAlign	Sets or returns the current alignment for text content
textBaseline	Sets or returns the current text baseline used when drawing text

scale()	Scales the current drawing bigger or smaller
rotate()	Rotates the current drawing
translate()	Remaps the (0,0) position on the canvas
transform()	Replaces the current transformation matrix for the drawing
setTransform()	Resets the current transform to the identity matrix. Then runs transform()

fill()	Fills the current drawing (path)
stroke()	Actually draws the path you have defined
beginPath()	Begins a path, or resets the current path
moveTo()	Moves the path to the specified point in the canvas, without creating a line
closePath()	Creates a path from the current point back to the starting point
lineTo()	Adds a new point and creates a line from that point to the last specified point in the canvas
clip()	Clips a region of any shape and size from the original canvas
quadraticCurveTo()	Creates a quadratic Bézier curve
bezierCurveTo()	Creates a cubic Bézier curve
arc()	Creates an arc/curve (used to create circles, or parts of circles)
arcTo()	Creates an arc/curve between two tangents
isPointInPath()	Returns true if the specified point is in the current path, otherwise false

fillStyle	Sets or returns the color, gradient, or pattern used to fill the drawing
strokeStyle	Sets or returns the color, gradient, or pattern used for strokes
shadowColor	Sets or returns the color to use for shadows
shadowBlur	Sets or returns the blur level for shadows
shadowOffsetX	Sets or returns the horizontal distance of the shadow from the shape
shadowOffsetY

createLinearGradient()	Creates a linear gradient (to use on canvas content)
createPattern()	Repeats a specified element in the specified direction
createRadialGradient()	Creates a radial/circular gradient (to use on canvas content)
addColorStop()

lineCap	Sets or returns the style of the end caps for a line
lineJoin	Sets or returns the type of corner created, when two lines meet
lineWidth	Sets or returns the current line width
miterLimit	Sets or returns the maximum miter length
rect()	Creates a rectangle
fillRect()	Draws a "filled" rectangle
strokeRect()	Draws a rectangle (no fill)
clearRect()	Clears the specified pixels within a given rectangle
*/
    });
    _myTrait_.isDirty = function(v) {
      if (typeof(v) != "undefined") {
        this._dirty = v;
        var p;
        if (p = this.parent()) p.isDirty(true);
        return this;
      }
      return this._dirty;
    }
    _myTrait_.paintHead = function(t) {

      return ocPaintHead(this);
    }
    _myTrait_.parent = function(t) {
      if (typeof(t) != "undefined") {
        this._parent = t;
        return this;
      }
      return this._parent;
    }
    _myTrait_.redo = function(t) {
      if (this._commands) {

        var c = this._undoBuffer.pop(),
          time;
        if (c) {
          time = c[2];
          while (c && c[2] == time) {
            this._commands.push(c);
            c = this._undoBuffer.pop();
          }
          if (c) {
            this._undoBuffer.push(c);
          }
        }
      }
    }
    _myTrait_.renderPath = function(pathStr, width, height) {

      var parser = svgPathParser();
      parser.parse(pathStr);
      parser.makePathAbsolute();
      parser.fitPathInto(width, height);

      parser.drawPath(this);

    }
    _myTrait_.renderSvg = function(svgDOM) {

      var pathBuffer = [],
        activePath = null,
        strokePath = null,
        bPathEnd = false,
        testOut,
        ctx = this,
        fillStyle = "none",
        strokeStyle = "black",
        createSettings = {
          tag: "",
          attrs: {

          }
        };
      if (!svgDOM) {
        testOut = _e().g();
      } else {
        testOut = svgDOM.g();
      }

      // to reset the current tag settings...
      var resetSettings = function() {
        createSettings.tag = "";
        createSettings.attrs = {

        };
      }



      ctx.execFn(function(cmd, args, trans) {
        if (cmd == "beginPath") {
          pathBuffer = [];
          bPathEnd = false;
          strokeStyle = "none";
          activePath = testOut.path("", {
            d: "",
            stroke: trans.getStyle("strokeStyle"),
            fill: trans.getStyle("fillStyle"),
            "fill-opacity": trans.getStyle("globalAlpha")
          });
        }


        if (cmd == "drawImage") {

          pathBuffer = [];
          /*
           <image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>            
                       */
          activePath = testOut.image("", {
            "xlink:href": args[0],
            x: args[1],
            y: args[2],
            width: args[3],
            height: args[4]
          });

        }


        if (cmd == "circle") {

          pathBuffer = [];

          activePath = testOut.circle("", {
            cx: args[0],
            cy: args[1],
            r: args[2],
            transform: trans.getSvgTransform(),
            stroke: trans.getStyle("strokeStyle"),
            fill: trans.getStyle("fillStyle")
          });

        }


        if (cmd == "rect") {

          pathBuffer = [];

          activePath = testOut.rect("", {
            x: args[0],
            y: args[1],
            width: args[2],
            height: args[3],
            transform: trans.getSvgTransform(),
            stroke: trans.getStyle("strokeStyle"),
            fill: trans.getStyle("fillStyle")
          });

        }

        if (cmd == "arc") {

          var p = trans.transformPoint(args[0], args[1]);
          var p0x = p.x,
            p0y = p.y;

          var pp = trans.transformDelta(args[2], args[2]);

          p0y -= pp.y;

          pathBuffer.push("M " + p0x + " " + p0y);
          pathBuffer.push("A " + pp.x + "," + pp.y + " 0 1,0 " + (p0x + 0.1) + " " + p0y + " ");

        }

        if (cmd == "fillText") {

          var txt = args[0];
          var p = trans.transformPoint(args[1], args[2]);
          var p0x = p.x,
            p0y = p.y;


          var pp = trans.transformDelta(parseInt(trans.getStyle("font-size")), parseInt(trans.getStyle("font-size")));

          var fontSize = pp.x,
            fontFamily = trans.getStyle("font-family");
          // <text x="0" y="15" fill="red">I love SVG!</text>
          activePath = testOut.svg_text("", {
            x: args[1],
            y: args[2]
          });
          activePath.text(txt);

          activePath.q.attr("font-size", parseInt(trans.getStyle("font-size")));
          activePath.q.attr("font-family", fontFamily);
          activePath.q.attr("fill", trans.getStyle("fillStyle"));
          activePath.q.attr("fill-opacity", trans.getStyle("globalAlpha"));

          activePath.q.attr("transform", trans.getSvgTransform());

          bPathEnd = false;
          pathBuffer = [];
          activePath = null;

        }


        if (cmd == "strokeText") {

          var txt = args[0];
          var p = trans.transformPoint(args[1], args[2]);
          var p0x = p.x,
            p0y = p.y;


          var pp = trans.transformDelta(parseInt(trans.getStyle("font-size")), parseInt(trans.getStyle("font-size")));

          var fontSize = pp.x,
            fontFamily = trans.getStyle("font-family");
          // <text x="0" y="15" fill="red">I love SVG!</text>
          activePath = testOut.svg_text("", {
            x: p0x,
            y: p0y
          });
          activePath.text(txt);

          activePath.q.attr("fill", "none");
          activePath.q.attr("font-size", fontSize);
          activePath.q.attr("font-family", fontFamily);
          activePath.q.attr("stroke", trans.getStyle("strokeStyle"));
          activePath.q.attr("stroke-opacity", trans.getStyle("globalAlpha"));

          bPathEnd = false;
          pathBuffer = [];
          activePath = null;

        }


        if (cmd == "quadraticCurveTo") {
          // ctx.bezierCurveTo(20,100,200,100,200,20);
          var sx = trans._point.tx0,
            sy = trans._point.ty0;

          var p = trans.transformPoint(args[0], args[1]);
          var p1x = p.x,
            p1y = p.y;
          var p = trans.transformPoint(args[2], args[3]);
          var p2x = p.x,
            p2y = p.y;

          if (pathBuffer.length == 0)
            pathBuffer.push("M " + sx + " " + sy);
          pathBuffer.push("Q " + p1x + " " + p1y + " " + p2x + " " + p2y + " ");

        }

        if (cmd == "bezierCurveTo") {
          // ctx.bezierCurveTo(20,100,200,100,200,20);
          var sx = trans._point.tx0,
            sy = trans._point.ty0;

          var p = trans.transformPoint(args[0], args[1]);
          var p1x = p.x,
            p1y = p.y;
          var p = trans.transformPoint(args[2], args[3]);
          var p2x = p.x,
            p2y = p.y;
          var p = trans.transformPoint(args[4], args[5]);
          var p3x = p.x,
            p3y = p.y;

          if (pathBuffer.length == 0)
            pathBuffer.push("M " + sx + " " + sy);
          pathBuffer.push("C " + p1x + " " + p1y + " " + p2x + " " + p2y + " " + p3x + " " + p3y + " ");

        }

        if (cmd == "moveTo") {
          var x = trans._point.tx1,
            y = trans._point.ty1,
            sx = trans._point.tx0,
            sy = trans._point.ty0;
          pathBuffer.push("M " + x + " " + y);
        }
        if (cmd == "lineTo") {
          var x = trans._point.tx1,
            y = trans._point.ty1,
            sx = trans._point.tx0,
            sy = trans._point.ty0;

          console.log("lineTo", sx, sy, x, y);
          if (pathBuffer.length == 0)
            pathBuffer.push("M " + sx + " " + sy);
          pathBuffer.push("L " + x + " " + y);
        }
        if (cmd == "stroke") {
          if (activePath) strokePath = activePath;
          activePath = null;
          strokeStyle = "black";
          // if(!bPathEnd) pathBuffer.push("z");
          var path = pathBuffer.join(" ");
          console.log("path", path);
          if (pathBuffer.length) strokePath.q.attr("d", path);
          console.log("new way");
          strokePath.attr({
            "stroke": trans.getStyle("strokeStyle"),
            "stroke-opacity": trans.getStyle("globalAlpha"),
            "stroke-width": trans.transformDelta(trans.getStyle("lineWidth") >> 0, trans.getStyle("lineWidth") >> 0).x || 1
          })

          bPathEnd = true;
        }
        if (cmd == "fill") {
          if (activePath) strokePath = activePath;
          activePath = null;
          if (!bPathEnd) pathBuffer.push("z");
          var path = pathBuffer.join(" ");
          console.log("path", path);
          if (pathBuffer.length) strokePath.q.attr("d", path);
          strokePath.q.attr("stroke", trans.getStyle("strokeStyle"));
          strokePath.q.attr("fill", trans.getStyle("fillStyle"));
          strokePath.q.attr("fill-opacity", trans.getStyle("globalAlpha"));
          bPathEnd = true;
          // activePath.q.attr("fill", args[1]);
        }
        // console.log(cmd, args, trans);
      });
      return testOut;
    }
    _myTrait_.replace = function(name) {

      var args = Array.prototype.slice.call(arguments);
      args.shift();
      var me = this;
      this._commands.forEach(function(f) {
        var fn = f[0];
        if (fn == name) {
          f[1] = args;
          me.isDirty(true);
        }
        if (fn == "setProperty") {
          if (f[1][0] == name) {
            f[1][1] = args[0];
            me.isDirty(true);
          }
        }
      });
    }
    _myTrait_.reset = function(t) {
      var ctx = this._ctx;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
    _myTrait_.serialize = function(t) {

      // Collecting all data...

      var o = {};
      o.commands = this._commands;
      o.inserts = {};

      var iList = this._inserts;
      if (iList) {
        for (var n in iList) {
          if (iList.hasOwnProperty(n)) {
            var list = [];
            iList[n].forEach(function(ch) {
              list.push(ch.serialize());
            })
            o.inserts[n] = list;
          }
        }
      }
      return o;
    }
    _myTrait_.set = function(childContext, insertObj) {
      if (insertObj) {
        if (!this.hasOwnProperty("_inserts")) {
          this._inserts = {};
        }
        if (!this._inserts[childContext])
          this._inserts[childContext] = [];
        this._inserts[childContext].length = 0; // remove the old values
        insertObj.parent(this);
        this._inserts[childContext].push(insertObj);
        return;
      } else {
        this.set("children", childContext);
      }
    }
    _myTrait_.shadow = function(amount, color) {

      this.shadowBlur(amount);
      this.shadowOffsetX(0);
      this.shadowOffsetY(0);
      this.shadowColor(color || "#000000");
    }
    _myTrait_.shapes = function(t) {

      return ocPathLib(this);
    }
    _myTrait_.svgPathString = function(t) {

      var pathBuffer = [],
        activePath = null,
        strokePath = null,
        bPathEnd = false,
        ctx = this,
        fillStyle = "none",
        resultString = "",
        strokeStyle = "black",
        createSettings = {
          tag: "",
          attrs: {

          }
        };

      // to reset the current tag settings...
      var resetSettings = function() {
        createSettings.tag = "";
        createSettings.attrs = {

        };
      }

      ctx.execFn(function(cmd, args, trans) {
        if (cmd == "beginPath") {
          pathBuffer = [];
          bPathEnd = false;
          strokeStyle = "none";

        }

        if (cmd == "arc") {

          var p = trans.transformPoint(args[0], args[1]);
          var p0x = p.x,
            p0y = p.y;

          var pp = trans.transformDelta(args[2], args[2]);

          p0y -= pp.y;

          pathBuffer.push("M " + p0x + " " + p0y);
          pathBuffer.push("A " + pp.x + "," + pp.y + " 0 1,0 " + (p0x + 0.1) + " " + p0y + " ");

        }

        if (cmd == "quadraticCurveTo") {
          // ctx.bezierCurveTo(20,100,200,100,200,20);
          var sx = trans._point.tx0,
            sy = trans._point.ty0;

          var p = trans.transformPoint(args[0], args[1]);
          var p1x = p.x,
            p1y = p.y;
          var p = trans.transformPoint(args[2], args[3]);
          var p2x = p.x,
            p2y = p.y;

          if (pathBuffer.length == 0)
            pathBuffer.push("M " + sx + " " + sy);
          pathBuffer.push("Q " + p1x + " " + p1y + " " + p2x + " " + p2y + " ");

        }

        if (cmd == "bezierCurveTo") {
          // ctx.bezierCurveTo(20,100,200,100,200,20);
          var sx = trans._point.tx0,
            sy = trans._point.ty0;

          var p = trans.transformPoint(args[0], args[1]);
          var p1x = p.x,
            p1y = p.y;
          var p = trans.transformPoint(args[2], args[3]);
          var p2x = p.x,
            p2y = p.y;
          var p = trans.transformPoint(args[4], args[5]);
          var p3x = p.x,
            p3y = p.y;

          if (pathBuffer.length == 0)
            pathBuffer.push("M " + sx + " " + sy);
          pathBuffer.push("C " + p1x + " " + p1y + " " + p2x + " " + p2y + " " + p3x + " " + p3y + " ");

        }

        if (cmd == "moveTo") {
          var x = trans._point.tx1,
            y = trans._point.ty1,
            sx = trans._point.tx0,
            sy = trans._point.ty0;
          pathBuffer.push("M " + x + " " + y);
        }
        if (cmd == "lineTo") {
          var x = trans._point.tx1,
            y = trans._point.ty1,
            sx = trans._point.tx0,
            sy = trans._point.ty0;

          // console.log("lineTo", sx,sy, x,y);
          if (pathBuffer.length == 0)
            pathBuffer.push("M " + sx + " " + sy);
          pathBuffer.push("L " + x + " " + y);
        }

        if (cmd == "stroke") {
          if (pathBuffer.length > 0) {
            if (!resultString) {
              resultString = pathBuffer.join(" ");
            }
          }
        }
        if (cmd == "fill") {
          if (pathBuffer.length > 0) {
            if (!resultString) {
              resultString = pathBuffer.join(" ");
            }
          }
        }
        // console.log(cmd, args, trans);
      });

      if (pathBuffer.length > 0) {
        if (!resultString) {
          resultString = pathBuffer.join(" ");
        }
      }
      return resultString;
    }
    _myTrait_.undo = function(t) {
      if (this._commands) {
        var c = this._commands.pop(),
          time;
        if (c) {
          time = c[2];
          while (c && c[2] == time) {
            this._undoBuffer.push(c);
            c = this._commands.pop();
          }
          if (c) {
            this._commands.push(c);
          }
        }

        console.log(this._commands);
      }
    }
    _myTrait_.unserialize = function(data) {
      /*var o = {};
           o.commands = this._commands;
           o.inserts = {};
           
           var iList = this._inserts;
           if(iList) {
               for(var n in iList) {
                   if(iList.hasOwnProperty(n)) {
                       var list = [];
                       iList[n].forEach( function(ch) {
                           list.push(ch.serialize());
                       })
                       o.inserts[n] = list;
                   }
               }
           }
           return o;
           */

      var o = canvasContext();

      o._commands = data.commands;
      var iList = data.inserts;
      if (iList) {
        o._inserts = {};
        for (var n in iList) {
          if (iList.hasOwnProperty(n)) {
            var list = [];
            iList[n].forEach(function(data) {
              list.push(canvasContext().unserialize(data));
            })
            o._inserts[n] = list;
          }
        }
      }
      return o;
    }
    _myTrait_.waitValue = function(t) {

    }
  }(this));
}
var canvasContext = function(a, b, c, d, e, f, g, h) {
  if (this instanceof canvasContext) {
    var args = [a, b, c, d, e, f, g, h];
    if (this.__factoryClass) {
      var m = this;
      var res;
      this.__factoryClass.forEach(function(initF) {
        res = initF.apply(m, args);
      });
      if (Object.prototype.toString.call(res) == '[object Function]') {
        if (res._classInfo.name != canvasContext._classInfo.name) return new res(a, b, c, d, e, f, g, h);
      } else {
        if (res) return res;
      }
    }
    if (this.__traitInit) {
      var m = this;
      this.__traitInit.forEach(function(initF) {
        initF.apply(m, args);
      })
    } else {
      if (typeof this.init == 'function')
        this.init.apply(this, args);
    }
  } else return new canvasContext(a, b, c, d, e, f, g, h);
};
canvasContext._classInfo = {
  name: 'canvasContext'
};
canvasContext.prototype = new canvasContext_prototype();
if (typeof(window) != 'undefined') window['canvasContext'] = canvasContext;
if (typeof(window) != 'undefined') window['canvasContext_prototype'] = canvasContext_prototype;