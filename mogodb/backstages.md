10.3.133.74:4321/home    //首页数据 ，无需传参

10.3.133.74:4321/login/reg   //用户注册接口     
 参数 { username: password}   返回值：true false

10.3.133.74:4321/login/login  //用户登录接口    
参数	{ username: password,mdl}   返回值：true false                    
		mdl   :   true\false     是否免登录     

// ！！！登录注册均为POST提交

10.3.133.74:4321/categoryNav   //列表页接口

10.3.133.74:4321/nav    //列表详情接口



10.3.133.74:4321/shopping/create    //商品添加  修改  （加入购物车和商品数量修改）
 参数  	agentId ;   商品ID
 		hopId ;	店铺ID
		Authorization  ； token  

10.3.133.74:4321/shopping/list		//购物车数据查询     
参数 ：Authorization  ； token  

127.0.0.1:4321/goods/:id			//商品详情信息 
参数：id   ：商品ID

127.0.0.1:4321/shopping/delete      //购物车商品删除
参数：	shopId 要删除的商店ID
		agentId:要删除的商品ID
		！！！	只传shupId为删除整个商店的物品