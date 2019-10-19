10.3.133.74:4321/home    //首页数据 ，无需传参

10.3.133.74:4321/login/reg   //用户注册接口      参数 { username: password}   返回值：true false

10.3.133.74:4321/login/login  //用户登录接口    参数{ username: password,mdl}   返回值：true false                    

mdl   :   true\false     是否免登录     

// ！！！登录注册均为POST提交



10.3.133.74:4321/categoryNav   //列表页结接口

10.3.133.74:4321/nav    //列表详情接口



10.3.133.74:4321/shopping/create    //商品添加  修改  （购物车和详情页）

​																	参数： buyNum ;    商品数量

​    																			 agentId ;   商品ID

 																				 shopId ;	店铺ID

​														    					Authorization  ； token  

10.3.133.74:4321/shopping/list			//购物车数据查询     

​																		参数 ：Authorization  ； token  