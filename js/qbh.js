$(document).ready(function() {
    //$(".qbh-list .qbh-list-search-finish")没有运动
    var flag = false;
    //$(".qbh-buy .qbh-buy-rotate-sofa")没有运动
    var flag1 = false;

    var flag2 = false;

    var flag3 = false;

  	$('#fullpage').fullpage({
        //背景颜色
    	sectionsColor:['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#fff'],
    	//设置小圆点
        navigation:true, 
        
    	//滚动到最后一屏的回调函数，接收anchorLink和index两个参数，
    	//anchorLink是锚链接的名称，index是序号，从1开始算
    	afterLoad:function(anchorLink,index){
            if(index == 1){
                $(".down").fadeIn();
            }
    		//console.log(anchorLink,index);
    		if(index == 2 && flag == false){
    			//让.qbh-list-search显示并且移动到电脑中心
    			$(".qbh-list .qbh-list-search").show().animate({
    				"right": 383
    			},1000, function() {
    				$(".qbh-list .qbh-list-search-font").animate({
    					"opacity":1
    				},1000,function(){
    					$('.qbh-list .qbh-list-search').hide();
    					$(".qbh-list .qbh-list-search-finish").show().animate({
    						"bottom":449,
    						"right":250,
    						"height":30,
    						"left":'none'
    					});
    					$(".qbh-list .qbh-list-sofas").show().animate({
    						"height": 218	
    					},1000)
    					$(".qbh-list .qbh-list-wordb").animate({
    						"opacity":1
    					},1000,function(){
                            $(".down").fadeIn();
                            flag = true;
                        })
    				})
    			})
    		}

            if (index == 8) {
                // 获取鼠标的位置
                $(document).mousemove(function (event) {
                    // console.log(event.pageX,event.pageY);
                    var mX = event.pageX;
                    var mY = event.pageY+10;
                    if(mY<210){
                        mY=210;
                    }
                    $(".qbh-shopping .qbh-shopping-hands ").show().css({
                      'left': mX,
                      'top': mY
                    })
                })
    
                $(".qbh-shopping .qbh-shopping-start-shopping").mouseenter(function(){
                    $(".qbh-shopping .qhb-shopping-dong").show();
                    $("qbh-shopping .qbh-shopping-start-shopping").hide();
                })

                $(".qbh-shopping .qhb-shopping-dong").mouseleave(function() {
                    $(".qbh-shopping .qhb-shopping-dong").hide();
                    $(".qbh-shopping .qbh-shopping-start-shopping").show();
                });
            }
        },
        
    	//滚动前的回调函数，接收index，nextIndex和direction3个参数
    	//index是离开页面的序号，从1开始计算
    	//nextIndex 是滚动到的页面的序号，从1开始计算
    	//direction 判断往上滚动还是往下滚动，值是up或down
    	onLeave: function(index,nextIndex,direction){
            //只要出现离开该页面就把 继续向下隐藏
            $(".down").fadeOut();
    		//console.log(index,nextIndex,direction);
    		var wHeight = $(window).height();
    		if(index == 2 && nextIndex == 3 && flag == true){
    			$(".qbh-list .qbh-list-sofa-pic").show().animate({
    				//掉下去的沙发的定位（bottom）= -（浏览器的高度-250）
    				"bottom":-(wHeight - 250),
    				"right":518,
    				"width":204
    			}, 1000,function(){
    				$(".qbh-buy .qbh-buy-choose-end").animate({
    					"opacity":1
    				})
    				$(".qbh-buy .qbh-buy-add-cart-end").animate({
    					"opacity":1
    				},function(){
                        $(".down").fadeIn();
                    })
    			})
    		}
            //第三屏和第四屏动画
            if(index == 3 && nextIndex == 4 && flag1 == false){
                $(".qbh-list .qbh-list-sofa-pic").hide();
                //让沙发从第三屏掉到第四屏
                $(".qbh-buy .qbh-buy-rotate-sofa").show().animate({
                    "bottom": -((wHeight-250)+50),
                    "right":260
                },1000,function(){
                    flag1 = true;
                    $(".qbh-buy .qbh-buy-sofa-pic").show();
                    $(".qbh-buy .qbh-buy-rotate-sofa").hide();
                    $(".qbh-info .qbh-info-rotate-sofa").show();
                    $(".qbh-info .qbh-info-cart-box").animate({
                     "left":2000
                    },1500,function(){
                        $(".qbh-info .qbh-info-address").animate({
                        "opacity":1
                        },1000,function(){
                            $(".qbh-info .qbh-info-wordb").animate({
                                "opacity":1
                            })
                            $(".qbh-info .qbh-info-address-font").animate({
                                "opacity":1
                            },function(){
                                $(".down").fadeIn();
                            })
                        })
                    }) 
                })
            }

            //第五屏动画
            if(index == 4 && flag2 == false){
                $(".qbh-payment .qbh-payment-hands").show().animate({
                    "bottom":0
                },1000,function(){
                    $(".qbh-payment .qbh-payment-mouse-end").animate({
                        "opacity":1
                    },10,function(){
                        //让顶部隐藏的沙发显示并掉入银行卡
                        $(".qbh-payment .qbh-payment-rotate-sofa-start").show().animate({
                            "bottom":245
                        },800,function(){
                            $(".qbh-payment .qbh-payment-rotate-sofa-end").animate({
                                "bottom":70
                            },500)

                            //让账单显示
                            $(".qbh-payment .qbh-payment-bill").animate({
                                "bottom":380
                            },500,function(){
                                $(".down").fadeIn();
                                flag2 == true;
                            })
                        })
                    })
                })
            }

            //第五屏到第六屏的动画
            if(index == 5 && nextIndex == 6 && flag3 == false){
                $(".qbh-payment .qbh-payment-rotate-sofa-continue").show().animate({
                    "bottom":-243,
                    "width":80
                },900)
                $(".qbh-delivery .qbh-delivery-box").show().animate({
                    "left":317,
                    "bottom":435
                },800,function(){
                    $(".qbh-payment .qbh-payment-rotate-sofa-continue").hide()
                    $(".qbh-delivery .qbh-delivery-box").animate({
                        "left":485,
                        "bottom":56,
                        "width":60
                    },800,function(){
                        $(".qbh-delivery .qbh-delivery-box").hide();
                        //背景图片移动
                        $(".qbh-delivery").animate({
                            "backgroundPositionX": '100%'
                        },3000,function(){
                            $(".qbh-delivery .qbh-delivery-font-end").animate({
                                "opacity":1
                            },600)
                            $(".qbh-delivery .qbh-delivery-deliveryman").animate({
                                "width":252,
                                "bottom":117
                            },1000,function(){
                                $(".qbh-delivery .qbh-delivery-deliveryman").animate({
                                    "right":600
                                },1000,function(){
                                    $(".qbh-delivery .qbh-delivery-shouhuo").show();
                                    $(".qbh-delivery .qbh-delivery-door").show();
                                    $(".qbh-delivery .qbh-delivery-buyer").animate({
                                        "width":87
                                    },function(){
                                        $(".down").fadeIn();
                                        flag3 = true;
                                    })
                                })
                            })
                        })
                        $(".qbh-delivery .qbh-delivery-shangjia").animate({
                            "opacity":1
                        },800)

                        $(".qbh-delivery .qbh-delivery-truck-font").animate({
                            "opacity":1
                        },1500)
                    })
                })
            }

            //第六屏到第七屏的动画
            if(index == 6 && nextIndex == 7){
                $(".qbh-appraise .qbh-appraise-star").animate({
                    "width":100
                },1500,function(){
                    $(".qbh-appraise .qbh-appraise-haoping").show().animate({
                        "left":395
                    },1000,function(){
                        $(".qbh-appraise .qbh-appraise-haoping").animate({
                            "width":72
                        },500,function(){
                            $(".down").fadeIn();
                        })
                    })
                })
            }
    	}
  	});
});