import { JdUnionBase } from './api-base'

/**
 * 频道ID类型
 */
export type EliteIdInfo = {
  1: '好券商品'
  2: '精选卖场'
  10: '9.9包邮'
  15: '京东配送'
  22: '实时热销榜'
  23: '为你推荐'
  24: '数码家电'
  25: '超市'
  26: '母婴玩具'
  27: '家具日用'
  28: '美妆穿搭'
  30: '图书文具'
  31: '今日必推'
  32: '京东好物'
  33: '京东秒杀'
  34: '拼购商品'
  40: '高收益榜'
  41: '自营热卖榜'
  108: '秒杀进行中'
  109: '新品首发'
  110: '自营'
  112: '京东爆品'
  125: '首购商品'
  129: '高佣榜单'
  130: '视频商品'
  153: '历史最低价商品榜'
  210: '极速版商品'
  238: '新人价商品'
  247: '京喜9.9'
  249: '京喜秒杀'
  315: '秒杀未开始'
  340: '时尚趋势品'
  341: '3C新品'
  342: '智能新品'
  343: '3C长尾商品'
  345: '时尚新品'
  346: '时尚爆品'
  426: '京喜自营'
  1001: '选品库'
  515: '订单接龙商品'
  519: '官方活动'
  536: '577全球购'
}
export type EliteIdType = keyof EliteIdInfo

const a = {
  code: 200,
  message: '成功',
  data: {
    apiInfoDTO: {
      apiName: 'jd.union.open.goods.jingfen.query',
      znName: '京粉精选商品查询接口',
      version: '1.0',
      apiDesc:
        '京东联盟精选优质商品，每日更新，可通过频道ID查询各个频道下的精选商品。用获取的优惠券链接调用转链接口时，需传入搜索接口link字段返回的原始优惠券链接，切勿对链接进行任何encode、decode操作，否则将导致转链二合一推广链接时校验失败。'
    },
    apiResponseExampleDTO: {
      jsonResponseExample:
        '{\n    "jd_union_open_goods_jingfen_query_response": {\n        "queryResult": {\n            "code": "200",\n            "data": {\n                "jfGoodsResp": {\n                    "bookInfo": {\n                        "isbn": "9787515515564"\n                    },\n                    "materialUrl": "item.jd.com/26898778009.html",\n                    "documentInfo": {\n                        "document": "温和亲肤的配方 洁净面部污垢 为肌肤添加补水保湿养分 泡沫绵密丰富 温润不易紧绷 弱酸性氨基酸系 含有自然成分 容易冲洗",\n                        "discount": "29.9碧素堂氨基酸洗面奶"\n                    },\n                    "imageInfo": {\n                        "whiteImage": "https://img14.360buyimg.com/pop/jfs/t1/74611/40/9199/226994/5d6f1c60E211d7a9e/e69c31469897a95a.png",\n                        "imageList": {\n                            "urlInfo": {\n                                "url": "http://img14.360buyimg.com/ads/jfs/t22495/56/628456568/380476/9befc935/5b39fb01N7d1af390.jpg"\n                            }\n                        }\n                    },\n                    "pinGouInfo": {\n                        "pingouEndTime": "2133999048000",\n                        "pingouPrice": "39.9",\n                        "pingouTmCount": "2",\n                        "pingouUrl": "https://wq.jd.com/pingou_api/GetAutoTuan?sku_id=35097232463 from=cps",\n                        "pingouStartTime": "1569224455000"\n                    },\n                    "forbidTypes": "[0,10,11]",\n                    "resourceInfo": {\n                        "eliteId": "11",\n                        "eliteName": "品牌好货-潮流范儿"\n                    },\n                    "skuLabelInfo": {\n                        "is7ToReturn": "1",\n                        "fxg": "1",\n                        "fxgServiceList": {\n                            "characteristicServiceInfo": {\n                                "serviceName": "破损包退换"\n                            }\n                        }\n                    },\n                    "skuName": "便携式女士香水持久淡香小样 初见系列香水 遇见时光",\n                    "priceInfo": {\n                        "lowestPrice": "14.9",\n                        "lowestCouponPrice": "10.9",\n                        "price": "39.9",\n                        "historyPriceDay": "180",\n                        "lowestPriceType": "2"\n                    },\n                    "isOversea": "1",\n                    "spuid": "3491692",\n                    "commissionInfo": {\n                        "isLock": "1",\n                        "commissionShare": "50",\n                        "plusCommissionShare": "50",\n                        "commission": "22.68",\n                        "startTime": "1601364491000",\n                        "couponCommission": "12.68",\n                        "endTime": "1601364491062"\n                    },\n                    "skuId": "26898778009",\n                    "brandCode": "7998",\n                    "owner": "g",\n                    "shopInfo": {\n                        "logisticsLvyueScore": "9.69",\n                        "shopLevel": "3.5",\n                        "userEvaluateScore": "9.46",\n                        "scoreRankRate": "94.36",\n                        "afterServiceScore": "8.98",\n                        "shopName": "XXXX旗舰店",\n                        "shopLabel": "1",\n                        "afsFactorScoreRankGrade": "中",\n                        "shopId": "45619",\n                        "logisticsFactorScoreRankGrade": "高",\n                        "commentFactorScoreRankGrade": "高"\n                    },\n                    "brandName": "悍途（Humtto）",\n                    "comments": "999",\n                    "seckillInfo": {\n                        "seckillOriPrice": "36.9",\n                        "seckillPrice": "26.8",\n                        "seckillStartTime": "1574474399000",\n                        "seckillEndTime": "1574388000000"\n                    },\n                    "couponInfo": {\n                        "couponList": {\n                            "coupon": {\n                                "useEndTime": "1532921782000",\n                                "getEndTime": "1532921782000",\n                                "useStartTime": "1532921782000",\n                                "quota": "39",\n                                "bindType": "3",\n                                "link": "http://coupon.jd.com/ilink/couponActiveFront/front_index.action?XXXXXXX",\n                                "platformType": "0",\n                                "discount": "30",\n                                "getStartTime": "1532921782000",\n                                "hotValue": "5",\n                                "isBest": "1"\n                            }\n                        }\n                    },\n                    "preSaleInfo": {\n                        "depositWorth": "10",\n                        "balanceEndTime": "1546444800000",\n                        "shipTime": "1546444800000",\n                        "preSalePayType": "1",\n                        "currentPrice": "100",\n                        "preSaleStartTime": "1546444800000",\n                        "balanceStartTime": "1546444800000",\n                        "preSaleEndTime": "1546444800000",\n                        "preSaleStatus": "1",\n                        "amountDeposit": "10",\n                        "discountType": "1",\n                        "earnest": "15",\n                        "preAmountDeposit": "10"\n                    },\n                    "companyType": "2",\n                    "videoInfo": {\n                        "videoList": {\n                            "video": {\n                                "duration": "10",\n                                "high": "300",\n                                "playType": "high",\n                                "videoType": "1",\n                                "imageUrl": "https://img.300hu.com/4c1f7a6atransbjngwcloud1oss/44128edd173016898433773569/imageSampleSnapshot/1555986468_406717890.100_2756.jpg",\n                                "width": "400",\n                                "playUrl": "https://vod.https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/44128edd173016898433773569/v.f20.mp4?dockingId=2bc88c56-a44d-45c4-99b4-d9b68557e4e9storageSource=3.com/4c1f7a6atransbjngwcloud1oss/44128edd173016898433773569/v.f20.mp4?dockingId=2bc88c56-a44d-45c4-99b4-d9b68557e4e9storageSource=3"\n                            }\n                        }\n                    },\n                    "secondPriceInfoList": {\n                        "secondPriceInfo": {\n                            "secondPriceType": "2",\n                            "secondPrice": "8.8"\n                        }\n                    },\n                    "deliveryType": "1",\n                    "goodCommentsShare": "99",\n                    "solitaireActivity": {\n                        "activityId": "854729",\n                        "groupProgress": "50",\n                        "reason": "推荐理由",\n                        "groupPrice": "15"\n                    },\n                    "categoryInfo": {\n                        "cid1Name": "珠宝首饰",\n                        "cid2Name": "木手串/把件",\n                        "cid2": "12041",\n                        "cid3Name": "其他",\n                        "cid3": "12052",\n                        "cid1": "6144"\n                    },\n                    "inOrderCount30DaysSku": "100",\n                    "inOrderCount30Days": "6018",\n                    "reserveInfo": {\n                        "price": "15",\n                        "panicBuyingEndTime": "1601364491000",\n                        "startTime": "1601364491000",\n                        "endTime": "1601364491000",\n                        "type": "1",\n                        "status": "1",\n                        "panicBuyingStartTime": "1601364491000"\n                    },\n                    "promotionLabelInfoList": {\n                        "promotionLabelInfo": {\n                            "promotionLabel": "满2件，总价打8折",\n                            "lableName": "满折",\n                            "promotionLableId": "5000125161",\n                            "startTime": "1608998400000",\n                            "endTime": "1608998400000"\n                        }\n                    },\n                    "isHot": "1",\n                    "jxFlags": "[1,2,3]"\n                }\n            },\n            "message": "success",\n            "totalCount": "100"\n        }\n    }\n}',
      xmlResponseExample:
        '<?xml version="1.0" encoding="UTF-8"?>\n<object>\n  <jd_union_open_goods_jingfen_query_response>\n    <queryResult>\n      <code>200</code>\n      <data>\n        <jfGoodsResp>\n          <bookInfo>\n            <isbn>9787515515564</isbn>\n          </bookInfo>\n          <brandCode>7998</brandCode>\n          <brandName>悍途（Humtto）</brandName>\n          <categoryInfo>\n            <cid1>6144</cid1>\n            <cid1Name>珠宝首饰</cid1Name>\n            <cid2>12041</cid2>\n            <cid2Name>木手串/把件</cid2Name>\n            <cid3>12052</cid3>\n            <cid3Name>其他</cid3Name>\n          </categoryInfo>\n          <comments>999</comments>\n          <commissionInfo>\n            <commission>22.68</commission>\n            <commissionShare>50</commissionShare>\n            <couponCommission>12.68</couponCommission>\n            <endTime>1601364491062</endTime>\n            <isLock>1</isLock>\n            <plusCommissionShare>50</plusCommissionShare>\n            <startTime>1601364491000</startTime>\n          </commissionInfo>\n          <companyType>2</companyType>\n          <couponInfo>\n            <couponList>\n              <coupon>\n                <bindType>3</bindType>\n                <discount>30</discount>\n                <getEndTime>1532921782000</getEndTime>\n                <getStartTime>1532921782000</getStartTime>\n                <hotValue>5</hotValue>\n                <isBest>1</isBest>\n                <link>http://coupon.jd.com/ilink/couponActiveFront/front_index.action?XXXXXXX</link>\n                <platformType>0</platformType>\n                <quota>39</quota>\n                <useEndTime>1532921782000</useEndTime>\n                <useStartTime>1532921782000</useStartTime>\n              </coupon>\n            </couponList>\n          </couponInfo>\n          <deliveryType>1</deliveryType>\n          <documentInfo>\n            <discount>29.9碧素堂氨基酸洗面奶</discount>\n            <document>温和亲肤的配方 洁净面部污垢 为肌肤添加补水保湿养分 泡沫绵密丰富 温润不易紧绷 弱酸性氨基酸系 含有自然成分 容易冲洗</document>\n          </documentInfo>\n          <forbidTypes>\n            <element>0</element>\n            <element>10</element>\n            <element>11</element>\n          </forbidTypes>\n          <goodCommentsShare>99</goodCommentsShare>\n          <imageInfo>\n            <imageList>\n              <urlInfo>\n                <url>http://img14.360buyimg.com/ads/jfs/t22495/56/628456568/380476/9befc935/5b39fb01N7d1af390.jpg</url>\n              </urlInfo>\n            </imageList>\n            <whiteImage>https://img14.360buyimg.com/pop/jfs/t1/74611/40/9199/226994/5d6f1c60E211d7a9e/e69c31469897a95a.png</whiteImage>\n          </imageInfo>\n          <inOrderCount30Days>6018</inOrderCount30Days>\n          <inOrderCount30DaysSku>100</inOrderCount30DaysSku>\n          <isHot>1</isHot>\n          <isOversea>1</isOversea>\n          <jxFlags>\n            <element>1</element>\n            <element>2</element>\n            <element>3</element>\n          </jxFlags>\n          <materialUrl>item.jd.com/26898778009.html</materialUrl>\n          <owner>g</owner>\n          <pinGouInfo>\n            <pingouEndTime>2133999048000</pingouEndTime>\n            <pingouPrice>39.9</pingouPrice>\n            <pingouStartTime>1569224455000</pingouStartTime>\n            <pingouTmCount>2</pingouTmCount>\n            <pingouUrl>https://wq.jd.com/pingou_api/GetAutoTuan?sku_id=35097232463 from=cps</pingouUrl>\n          </pinGouInfo>\n          <preSaleInfo>\n            <amountDeposit>10</amountDeposit>\n            <balanceEndTime>1546444800000</balanceEndTime>\n            <balanceStartTime>1546444800000</balanceStartTime>\n            <currentPrice>100</currentPrice>\n            <depositWorth>10</depositWorth>\n            <discountType>1</discountType>\n            <earnest>15</earnest>\n            <preAmountDeposit>10</preAmountDeposit>\n            <preSaleEndTime>1546444800000</preSaleEndTime>\n            <preSalePayType>1</preSalePayType>\n            <preSaleStartTime>1546444800000</preSaleStartTime>\n            <preSaleStatus>1</preSaleStatus>\n            <shipTime>1546444800000</shipTime>\n          </preSaleInfo>\n          <priceInfo>\n            <historyPriceDay>180</historyPriceDay>\n            <lowestCouponPrice>10.9</lowestCouponPrice>\n            <lowestPrice>14.9</lowestPrice>\n            <lowestPriceType>2</lowestPriceType>\n            <price>39.9</price>\n          </priceInfo>\n          <promotionLabelInfoList>\n            <promotionLabelInfo>\n              <endTime>1608998400000</endTime>\n              <lableName>满折</lableName>\n              <promotionLabel>满2件，总价打8折</promotionLabel>\n              <promotionLableId>5000125161</promotionLableId>\n              <startTime>1608998400000</startTime>\n            </promotionLabelInfo>\n          </promotionLabelInfoList>\n          <reserveInfo>\n            <endTime>1601364491000</endTime>\n            <panicBuyingEndTime>1601364491000</panicBuyingEndTime>\n            <panicBuyingStartTime>1601364491000</panicBuyingStartTime>\n            <price>15</price>\n            <startTime>1601364491000</startTime>\n            <status>1</status>\n            <type>1</type>\n          </reserveInfo>\n          <resourceInfo>\n            <eliteId>11</eliteId>\n            <eliteName>品牌好货-潮流范儿</eliteName>\n          </resourceInfo>\n          <seckillInfo>\n            <seckillEndTime>1574388000000</seckillEndTime>\n            <seckillOriPrice>36.9</seckillOriPrice>\n            <seckillPrice>26.8</seckillPrice>\n            <seckillStartTime>1574474399000</seckillStartTime>\n          </seckillInfo>\n          <secondPriceInfoList>\n            <secondPriceInfo>\n              <secondPrice>8.8</secondPrice>\n              <secondPriceType>2</secondPriceType>\n            </secondPriceInfo>\n          </secondPriceInfoList>\n          <shopInfo>\n            <afsFactorScoreRankGrade>中</afsFactorScoreRankGrade>\n            <afterServiceScore>8.98</afterServiceScore>\n            <commentFactorScoreRankGrade>高</commentFactorScoreRankGrade>\n            <logisticsFactorScoreRankGrade>高</logisticsFactorScoreRankGrade>\n            <logisticsLvyueScore>9.69</logisticsLvyueScore>\n            <scoreRankRate>94.36</scoreRankRate>\n            <shopId>45619</shopId>\n            <shopLabel>1</shopLabel>\n            <shopLevel>3.5</shopLevel>\n            <shopName>XXXX旗舰店</shopName>\n            <userEvaluateScore>9.46</userEvaluateScore>\n          </shopInfo>\n          <skuId>26898778009</skuId>\n          <skuLabelInfo>\n            <fxg>1</fxg>\n            <fxgServiceList>\n              <characteristicServiceInfo>\n                <serviceName>破损包退换</serviceName>\n              </characteristicServiceInfo>\n            </fxgServiceList>\n            <is7ToReturn>1</is7ToReturn>\n          </skuLabelInfo>\n          <skuName>便携式女士香水持久淡香小样 初见系列香水 遇见时光</skuName>\n          <solitaireActivity>\n            <activityId>854729</activityId>\n            <groupPrice>15</groupPrice>\n            <groupProgress>50</groupProgress>\n            <reason>推荐理由</reason>\n          </solitaireActivity>\n          <spuid>3491692</spuid>\n          <videoInfo>\n            <videoList>\n              <video>\n                <duration>10</duration>\n                <high>300</high>\n                <imageUrl>https://img.300hu.com/4c1f7a6atransbjngwcloud1oss/44128edd173016898433773569/imageSampleSnapshot/1555986468_406717890.100_2756.jpg</imageUrl>\n                <playType>high</playType>\n                <playUrl>https://vod.https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/44128edd173016898433773569/v.f20.mp4?dockingId=2bc88c56-a44d-45c4-99b4-d9b68557e4e9storageSource=3.com/4c1f7a6atransbjngwcloud1oss/44128edd173016898433773569/v.f20.mp4?dockingId=2bc88c56-a44d-45c4-99b4-d9b68557e4e9storageSource=3</playUrl>\n                <videoType>1</videoType>\n                <width>400</width>\n              </video>\n            </videoList>\n          </videoInfo>\n        </jfGoodsResp>\n      </data>\n      <message>success</message>\n      <totalCount>100</totalCount>\n    </queryResult>\n  </jd_union_open_goods_jingfen_query_response>\n</object>\n'
    },
    apiSdkExampleTemplateDTOS: [
      {
        type: 'php',
        example:
          '$c = new JdClient();\n<br/>\n$c->appKey = appKey;\n<br/>\n$c->appSecret = appSecret;\n<br/>\n$c->accessToken = accessToken;\n<br/>\n$c->serverUrl = SERVER_URL;\n<br/>\n$req = new UnionOpenGoodsJingfenQueryRequest();\n<br/>\n                                                                                                                                \n$goodsReq= new GoodsReq;\n<br/>\n                    \n$req->setGoodsReq($goodsReq);\n<br/>\n                        $req->setVersion("1.0");\n<br/>\n$resp = $c->execute($req, $c->accessToken);\n<br/>\n\n\n\n'
      },
      {
        type: 'java',
        example:
          'JdClient client=new DefaultJdClient(SERVER_URL,accessToken,appKey,appSecret);  <br>UnionOpenGoodsJingfenQueryRequest request=new UnionOpenGoodsJingfenQueryRequest();<br>JFGoodsReq goodsReq=new JFGoodsReq();<br>request.setGoodsReq(goodsReq);<br>request.setVersion("1.0");<br>UnionOpenGoodsJingfenQueryResponse response=client.execute(request);'
      },
      {
        type: 'python',
        example:
          'import jd.api\n<br/>\nimport json\n<br/>\nfrom jd.api.rest.UnionOpenGoodsJingfenQueryRequest import UnionOpenGoodsJingfenQueryRequest\n<br/>\n\njd.setDefaultAppInfo(appkey, secret)\n<br/>\na = UnionOpenGoodsJingfenQueryRequest(url,port)\n<br/>\na.goodsReq=""\n<br/>\na.version = "1.0"\n<br/>\ntry:\n<br/>\nf= a.getResponse(sessionkey)\n<br/>\nprint(json.dumps(f, ensure_ascii=False))\n<br/>\nexcept Exception,e:\n<br/>\nprint(e)\n<br/>\n\n\n'
      }
    ],
    method: {
      elements: [
        {
          id: 1,
          pid: 0,
          type: 'String',
          systemValue: true,
          webPamer: 'appKey',
          elements: [],
          required: false,
          value: '无',
          desc: '无'
        },
        {
          id: 2,
          pid: 0,
          type: 'com.jd.union.open.gateway.api.dto.goods.jingfen.JFGoodsReq',
          systemValue: false,
          webPamer: 'goodsReq',
          elements: [
            {
              id: 2001,
              pid: 2,
              type: 'Number',
              systemValue: false,
              webPamer: 'eliteId',
              elements: [],
              required: true,
              value: '22',
              desc:
                '频道ID:1-好券商品,2-精选卖场,10-9.9包邮,15-京东配送,22-实时热销榜,23-为你推荐,24-数码家电,25-超市,26-母婴玩具,27-家具日用,28-美妆穿搭,30-图书文具,31-今日必推,32-京东好物,33-京东秒杀,34-拼购商品,40-高收益榜,41-自营热卖榜,108-秒杀进行中,109-新品首发,110-自营,112-京东爆品,125-首购商品,129-高佣榜单,130-视频商品,153-历史最低价商品榜,210-极速版商品,238-新人价商品,247-京喜9.9,249-京喜秒杀,315-秒杀未开始,340-时尚趋势品,341-3C新品,342-智能新品,343-3C长尾商品,345-时尚新品,346-时尚爆品,426-京喜自营,1001-选品库,515-订单接龙商品,519-官方活动，536-577全球购'
            },
            {
              id: 2002,
              pid: 2,
              type: 'Number',
              systemValue: false,
              webPamer: 'pageIndex',
              elements: [],
              required: false,
              value: '1',
              desc: '页码，默认1'
            },
            {
              id: 2003,
              pid: 2,
              type: 'Number',
              systemValue: false,
              webPamer: 'pageSize',
              elements: [],
              required: false,
              value: '20',
              desc: '每页数量，默认20，上限50，建议20'
            },
            {
              id: 2004,
              pid: 2,
              type: 'String',
              systemValue: false,
              webPamer: 'sortName',
              elements: [],
              required: false,
              value: 'price',
              desc:
                '排序字段(price：单价, commissionShare：佣金比例, commission：佣金， inOrderCount30DaysSku：sku维度30天引单量，comments：评论数，goodComments：好评数)'
            },
            {
              id: 2005,
              pid: 2,
              type: 'String',
              systemValue: false,
              webPamer: 'sort',
              elements: [],
              required: false,
              value: 'desc',
              desc: 'asc,desc升降序,默认降序'
            },
            {
              id: 2006,
              pid: 2,
              type: 'String',
              systemValue: false,
              webPamer: 'pid',
              elements: [],
              required: false,
              value: '618_618_618',
              desc: '联盟id_应用id_推广位id，三段式'
            },
            {
              id: 2007,
              pid: 2,
              type: 'String',
              systemValue: false,
              webPamer: 'fields',
              elements: [],
              required: false,
              value: 'videoInfo',
              desc:
                "支持出参数据筛选，逗号','分隔，目前可用：videoInfo(视频信息),hotWords(热词),similar(相似推荐商品),documentInfo(段子信息)，skuLabelInfo（商品标签），promotionLabelInfo（商品促销标签）,companyType（小店标识）"
            },
            {
              id: 2008,
              pid: 2,
              type: 'String',
              systemValue: false,
              webPamer: 'forbidTypes',
              elements: [],
              required: false,
              value: '10,11',
              desc: '10微信京东购物小程序禁售，11微信京喜小程序禁售'
            },
            {
              id: 2009,
              pid: 2,
              type: 'Number',
              systemValue: false,
              webPamer: 'groupId',
              elements: [],
              required: false,
              value: '12345',
              desc: '选品库id（仅对eliteId=1001和519有效，且必传）'
            },
            {
              id: 2010,
              pid: 2,
              type: 'Number',
              systemValue: false,
              webPamer: 'ownerUnionId',
              elements: [],
              required: false,
              value: '100000345',
              desc: 'groupId创建者的UnionId'
            },
            {
              id: 2011,
              pid: 2,
              type: 'Number',
              systemValue: false,
              webPamer: 'timeType',
              elements: [],
              required: false,
              value: '0',
              desc:
                '订单接龙活动时间，当eliteId=515订单接龙商品时，需要传入该字段，默认是0。0-当天，1-明天，2-后天。'
            }
          ],
          required: true,
          value: '无',
          desc: '请求入参'
        }
      ],
      josResult: {
        elements: [
          {
            id: 1,
            pid: 0,
            type: 'com.jd.kpl.JingfenQueryResult',
            systemValue: false,
            webPamer: 'queryResult',
            elements: [
              {
                id: 1001,
                pid: 1,
                type: 'Number',
                systemValue: false,
                webPamer: 'code',
                elements: [],
                required: true,
                value: '200',
                desc: '返回码'
              },
              {
                id: 1002,
                pid: 1,
                type: 'String',
                systemValue: false,
                webPamer: 'message',
                elements: [],
                required: true,
                value: 'success',
                desc: '返回消息'
              },
              {
                id: 1003,
                pid: 1,
                type: 'com.jd.kpl.JFGoodsResp[]',
                systemValue: false,
                webPamer: 'data',
                elements: [
                  {
                    id: 1003001,
                    pid: 1003,
                    type: 'com.jd.kpl.JFGoodsResp',
                    systemValue: false,
                    webPamer: 'jfGoodsResp',
                    elements: [
                      {
                        id: 1003001001,
                        pid: 1003001,
                        type: 'com.jd.kpl.CategoryInfo',
                        systemValue: false,
                        webPamer: 'categoryInfo',
                        elements: [
                          {
                            id: 1003001001001,
                            pid: 1003001001,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'cid1',
                            elements: [],
                            required: true,
                            value: '6144',
                            desc: '一级类目ID'
                          },
                          {
                            id: 1003001001002,
                            pid: 1003001001,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'cid1Name',
                            elements: [],
                            required: true,
                            value: '珠宝首饰',
                            desc: '一级类目名称'
                          },
                          {
                            id: 1003001001003,
                            pid: 1003001001,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'cid2',
                            elements: [],
                            required: true,
                            value: '12041',
                            desc: ' 二级类目ID'
                          },
                          {
                            id: 1003001001004,
                            pid: 1003001001,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'cid2Name',
                            elements: [],
                            required: true,
                            value: '木手串/把件',
                            desc: '二级类目名称'
                          },
                          {
                            id: 1003001001005,
                            pid: 1003001001,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'cid3',
                            elements: [],
                            required: true,
                            value: '12052',
                            desc: '三级类目ID'
                          },
                          {
                            id: 1003001001006,
                            pid: 1003001001,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'cid3Name',
                            elements: [],
                            required: true,
                            value: '其他',
                            desc: '三级类目名称'
                          }
                        ],
                        required: true,
                        value: '无',
                        desc: '类目信息'
                      },
                      {
                        id: 1003001002,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'comments',
                        elements: [],
                        required: true,
                        value: '999',
                        desc: '评论数'
                      },
                      {
                        id: 1003001003,
                        pid: 1003001,
                        type: 'com.jd.kpl.CommissionInfo',
                        systemValue: false,
                        webPamer: 'commissionInfo',
                        elements: [
                          {
                            id: 1003001003001,
                            pid: 1003001003,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'commission',
                            elements: [],
                            required: true,
                            value: '22.68',
                            desc: '佣金'
                          },
                          {
                            id: 1003001003002,
                            pid: 1003001003,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'commissionShare',
                            elements: [],
                            required: true,
                            value: '50',
                            desc: '佣金比例'
                          },
                          {
                            id: 1003001003003,
                            pid: 1003001003,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'couponCommission',
                            elements: [],
                            required: false,
                            value: '12.68',
                            desc: '券后佣金，（促销价-优惠券面额）*佣金比例'
                          },
                          {
                            id: 1003001003004,
                            pid: 1003001003,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'plusCommissionShare',
                            elements: [],
                            required: false,
                            value: '50',
                            desc:
                              'plus佣金比例，plus用户购买推广者能获取到的佣金比例'
                          },
                          {
                            id: 1003001003005,
                            pid: 1003001003,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'isLock',
                            elements: [],
                            required: false,
                            value: '1',
                            desc: '是否锁定佣金比例：1是，0否'
                          },
                          {
                            id: 1003001003006,
                            pid: 1003001003,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'startTime',
                            elements: [],
                            required: false,
                            value: '1601364491000',
                            desc: '计划开始时间（时间戳，毫秒）'
                          },
                          {
                            id: 1003001003007,
                            pid: 1003001003,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'endTime',
                            elements: [],
                            required: false,
                            value: '1601364491062',
                            desc: '计划结束时间（时间戳，毫秒）'
                          }
                        ],
                        required: true,
                        value: '无',
                        desc: '佣金信息'
                      },
                      {
                        id: 1003001004,
                        pid: 1003001,
                        type: 'com.jd.kpl.CouponInfo',
                        systemValue: false,
                        webPamer: 'couponInfo',
                        elements: [
                          {
                            id: 1003001004001,
                            pid: 1003001004,
                            type: 'com.jd.kpl.Coupon[]',
                            systemValue: false,
                            webPamer: 'couponList',
                            elements: [
                              {
                                id: 1003001004001001,
                                pid: 1003001004001,
                                type: 'com.jd.kpl.Coupon',
                                systemValue: false,
                                webPamer: 'coupon',
                                elements: [
                                  {
                                    id: 1003001004001001001,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'bindType',
                                    elements: [],
                                    required: true,
                                    value: '3',
                                    desc:
                                      '券种类 (优惠券种类：0 - 全品类，1 - 限品类（自营商品），2 - 限店铺，3 - 店铺限商品券)'
                                  },
                                  {
                                    id: 1003001004001001002,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'discount',
                                    elements: [],
                                    required: true,
                                    value: '30',
                                    desc: '券面额'
                                  },
                                  {
                                    id: 1003001004001001003,
                                    pid: 1003001004001001,
                                    type: 'String',
                                    systemValue: false,
                                    webPamer: 'link',
                                    elements: [],
                                    required: true,
                                    value:
                                      'http://coupon.jd.com/ilink/couponActiveFront/front_index.action?XXXXXXX',
                                    desc: '券链接'
                                  },
                                  {
                                    id: 1003001004001001004,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'platformType',
                                    elements: [],
                                    required: true,
                                    value: '0',
                                    desc:
                                      '券使用平台 (平台类型：0 - 全平台券，1 - 限平台券)'
                                  },
                                  {
                                    id: 1003001004001001005,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'quota',
                                    elements: [],
                                    required: true,
                                    value: '39',
                                    desc: '券消费限额'
                                  },
                                  {
                                    id: 1003001004001001006,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'getStartTime',
                                    elements: [],
                                    required: true,
                                    value: '1532921782000',
                                    desc: '领取开始时间(时间戳，毫秒)'
                                  },
                                  {
                                    id: 1003001004001001007,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'getEndTime',
                                    elements: [],
                                    required: true,
                                    value: '1532921782000',
                                    desc: '券领取结束时间(时间戳，毫秒)'
                                  },
                                  {
                                    id: 1003001004001001008,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'useStartTime',
                                    elements: [],
                                    required: true,
                                    value: '1532921782000',
                                    desc: '券有效使用开始时间(时间戳，毫秒)'
                                  },
                                  {
                                    id: 1003001004001001009,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'useEndTime',
                                    elements: [],
                                    required: true,
                                    value: '1532921782000',
                                    desc: '券有效使用结束时间(时间戳，毫秒)'
                                  },
                                  {
                                    id: 1003001004001001010,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'isBest',
                                    elements: [],
                                    required: true,
                                    value: '1',
                                    desc:
                                      '最优优惠券，1：是；0：否，购买一件商品可使用的面额最大优惠券'
                                  },
                                  {
                                    id: 1003001004001001011,
                                    pid: 1003001004001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'hotValue',
                                    elements: [],
                                    required: true,
                                    value: '5',
                                    desc: '券热度，值越大热度越高，区间:[0,10]'
                                  }
                                ],
                                required: true,
                                value: '无',
                                desc: '优惠券合集'
                              }
                            ],
                            required: true,
                            value: '无',
                            desc: '优惠券合集'
                          }
                        ],
                        required: true,
                        value: '无',
                        desc: '优惠券信息，返回内容为空说明该SKU无可用优惠券'
                      },
                      {
                        id: 1003001005,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'goodCommentsShare',
                        elements: [],
                        required: true,
                        value: '99',
                        desc: '商品好评率'
                      },
                      {
                        id: 1003001006,
                        pid: 1003001,
                        type: 'com.jd.kpl.ImageInfo',
                        systemValue: false,
                        webPamer: 'imageInfo',
                        elements: [
                          {
                            id: 1003001006001,
                            pid: 1003001006,
                            type: 'com.jd.kpl.UrlInfo[]',
                            systemValue: false,
                            webPamer: 'imageList',
                            elements: [
                              {
                                id: 1003001006001001,
                                pid: 1003001006001,
                                type: 'com.jd.kpl.UrlInfo',
                                systemValue: false,
                                webPamer: 'urlInfo',
                                elements: [
                                  {
                                    id: 1003001006001001001,
                                    pid: 1003001006001001,
                                    type: 'String',
                                    systemValue: false,
                                    webPamer: 'url',
                                    elements: [],
                                    required: true,
                                    value:
                                      'http://img14.360buyimg.com/ads/jfs/t22495/56/628456568/380476/9befc935/5b39fb01N7d1af390.jpg',
                                    desc:
                                      '图片链接地址，第一个图片链接为主图链接,修改图片尺寸拼接方法：/s***x***_jfs/，例如：http://img14.360buyimg.com/ads/s300x300_jfs/t22495/56/628456568/380476/9befc935/5b39fb01N7d1af390.jpg'
                                  }
                                ],
                                required: true,
                                value: '无',
                                desc: '图片合集'
                              }
                            ],
                            required: true,
                            value: '无',
                            desc: '图片合集'
                          },
                          {
                            id: 1003001006002,
                            pid: 1003001006,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'whiteImage',
                            elements: [],
                            required: false,
                            value:
                              'https://img14.360buyimg.com/pop/jfs/t1/74611/40/9199/226994/5d6f1c60E211d7a9e/e69c31469897a95a.png',
                            desc: '白底图'
                          }
                        ],
                        required: true,
                        value: '无',
                        desc: '图片信息'
                      },
                      {
                        id: 1003001007,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'inOrderCount30Days',
                        elements: [],
                        required: true,
                        value: '6018',
                        desc: '30天引单数量'
                      },
                      {
                        id: 1003001008,
                        pid: 1003001,
                        type: 'String',
                        systemValue: false,
                        webPamer: 'materialUrl',
                        elements: [],
                        required: true,
                        value: 'item.jd.com/26898778009.html',
                        desc: '商品落地页'
                      },
                      {
                        id: 1003001009,
                        pid: 1003001,
                        type: 'com.jd.kpl.PriceInfo',
                        systemValue: false,
                        webPamer: 'priceInfo',
                        elements: [
                          {
                            id: 1003001009001,
                            pid: 1003001009,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'price',
                            elements: [],
                            required: true,
                            value: '39.9',
                            desc: '商品价格'
                          },
                          {
                            id: 1003001009002,
                            pid: 1003001009,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'lowestPrice',
                            elements: [],
                            required: false,
                            value: '14.9',
                            desc: '促销价'
                          },
                          {
                            id: 1003001009003,
                            pid: 1003001009,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'lowestPriceType',
                            elements: [],
                            required: false,
                            value: '2',
                            desc:
                              '促销价类型，1：无线价格；2：拼购价格； 3：秒杀价格；4：预售价格'
                          },
                          {
                            id: 1003001009004,
                            pid: 1003001009,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'lowestCouponPrice',
                            elements: [],
                            required: false,
                            value: '10.9',
                            desc: '券后价（有无券都返回此字段）'
                          },
                          {
                            id: 1003001009005,
                            pid: 1003001009,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'historyPriceDay',
                            elements: [],
                            required: false,
                            value: '180',
                            desc:
                              '历史最低价天数（例：当前券后价最近180天最低）'
                          }
                        ],
                        required: true,
                        value: '无',
                        desc: '价格信息'
                      },
                      {
                        id: 1003001010,
                        pid: 1003001,
                        type: 'com.jd.kpl.ShopInfo',
                        systemValue: false,
                        webPamer: 'shopInfo',
                        elements: [
                          {
                            id: 1003001010001,
                            pid: 1003001010,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'shopName',
                            elements: [],
                            required: true,
                            value: 'XXXX旗舰店',
                            desc: '店铺名称（或供应商名称）'
                          },
                          {
                            id: 1003001010002,
                            pid: 1003001010,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'shopId',
                            elements: [],
                            required: true,
                            value: '45619',
                            desc: '店铺Id'
                          },
                          {
                            id: 1003001010003,
                            pid: 1003001010,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'shopLevel',
                            elements: [],
                            required: false,
                            value: '3.5',
                            desc: '店铺评分'
                          },
                          {
                            id: 1003001010004,
                            pid: 1003001010,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'shopLabel',
                            elements: [],
                            required: false,
                            value: '1',
                            desc:
                              '1：京东好店  https://img12.360buyimg.com/schoolbt/jfs/t1/80828/19/2993/908/5d14277aEbb134d76/889d5265315e11ed.png'
                          },
                          {
                            id: 1003001010005,
                            pid: 1003001010,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'userEvaluateScore',
                            elements: [],
                            required: false,
                            value: '9.46',
                            desc: '用户评价评分（仅pop店铺有值）'
                          },
                          {
                            id: 1003001010006,
                            pid: 1003001010,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'commentFactorScoreRankGrade',
                            elements: [],
                            required: false,
                            value: '高',
                            desc: '用户评价评级（仅pop店铺有值）'
                          },
                          {
                            id: 1003001010007,
                            pid: 1003001010,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'logisticsLvyueScore',
                            elements: [],
                            required: false,
                            value: '9.69',
                            desc: '物流履约评分（仅pop店铺有值）'
                          },
                          {
                            id: 1003001010008,
                            pid: 1003001010,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'logisticsFactorScoreRankGrade',
                            elements: [],
                            required: false,
                            value: '高',
                            desc: '物流履约评级（仅pop店铺有值）'
                          },
                          {
                            id: 1003001010009,
                            pid: 1003001010,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'afterServiceScore',
                            elements: [],
                            required: false,
                            value: '8.98',
                            desc: '售后服务评分（仅pop店铺有值）'
                          },
                          {
                            id: 1003001010010,
                            pid: 1003001010,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'afsFactorScoreRankGrade',
                            elements: [],
                            required: false,
                            value: '中',
                            desc: '售后服务评级（仅pop店铺有值）'
                          },
                          {
                            id: 1003001010011,
                            pid: 1003001010,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'scoreRankRate',
                            elements: [],
                            required: false,
                            value: '94.36',
                            desc: '店铺风向标（仅pop店铺有值）'
                          }
                        ],
                        required: true,
                        value: '无',
                        desc: '店铺信息'
                      },
                      {
                        id: 1003001011,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'skuId',
                        elements: [],
                        required: true,
                        value: '26898778009',
                        desc: '商品ID'
                      },
                      {
                        id: 1003001012,
                        pid: 1003001,
                        type: 'String',
                        systemValue: false,
                        webPamer: 'skuName',
                        elements: [],
                        required: true,
                        value:
                          '便携式女士香水持久淡香小样 初见系列香水 遇见时光',
                        desc: '商品名称'
                      },
                      {
                        id: 1003001013,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'isHot',
                        elements: [],
                        required: true,
                        value: '1',
                        desc: '已废弃，请勿使用'
                      },
                      {
                        id: 1003001014,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'spuid',
                        elements: [],
                        required: true,
                        value: '3491692',
                        desc: 'spuid，其值为同款商品的主skuid'
                      },
                      {
                        id: 1003001015,
                        pid: 1003001,
                        type: 'String',
                        systemValue: false,
                        webPamer: 'brandCode',
                        elements: [],
                        required: true,
                        value: '7998',
                        desc: '品牌code'
                      },
                      {
                        id: 1003001016,
                        pid: 1003001,
                        type: 'String',
                        systemValue: false,
                        webPamer: 'brandName',
                        elements: [],
                        required: true,
                        value: '悍途（Humtto）',
                        desc: ' 品牌名'
                      },
                      {
                        id: 1003001017,
                        pid: 1003001,
                        type: 'String',
                        systemValue: false,
                        webPamer: 'owner',
                        elements: [],
                        required: true,
                        value: 'g',
                        desc: 'g=自营，p=pop'
                      },
                      {
                        id: 1003001018,
                        pid: 1003001,
                        type: 'com.jd.kpl.PinGouInfo',
                        systemValue: false,
                        webPamer: 'pinGouInfo',
                        elements: [
                          {
                            id: 1003001018001,
                            pid: 1003001018,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'pingouPrice',
                            elements: [],
                            required: true,
                            value: '39.9',
                            desc: '拼购价格'
                          },
                          {
                            id: 1003001018002,
                            pid: 1003001018,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'pingouTmCount',
                            elements: [],
                            required: true,
                            value: '2',
                            desc: '拼购成团所需人数'
                          },
                          {
                            id: 1003001018003,
                            pid: 1003001018,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'pingouUrl',
                            elements: [],
                            required: true,
                            value:
                              'https://wq.jd.com/pingou_api/GetAutoTuan?sku_id=35097232463 from=cps',
                            desc: '拼购落地页url'
                          },
                          {
                            id: 1003001018004,
                            pid: 1003001018,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'pingouStartTime',
                            elements: [],
                            required: false,
                            value: '1569224455000',
                            desc: '拼购开始时间(时间戳，毫秒)'
                          },
                          {
                            id: 1003001018005,
                            pid: 1003001018,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'pingouEndTime',
                            elements: [],
                            required: false,
                            value: '2133999048000',
                            desc: '拼购结束时间(时间戳，毫秒)'
                          }
                        ],
                        required: true,
                        value: '无',
                        desc: '拼购信息'
                      },
                      {
                        id: 1003001019,
                        pid: 1003001,
                        type: 'com.jd.kpl.ResourceInfo',
                        systemValue: false,
                        webPamer: 'resourceInfo',
                        elements: [
                          {
                            id: 1003001019001,
                            pid: 1003001019,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'eliteId',
                            elements: [],
                            required: true,
                            value: '11',
                            desc: '频道id'
                          },
                          {
                            id: 1003001019002,
                            pid: 1003001019,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'eliteName',
                            elements: [],
                            required: true,
                            value: '品牌好货-潮流范儿',
                            desc: '频道名称'
                          }
                        ],
                        required: true,
                        value: '无',
                        desc: '资源信息'
                      },
                      {
                        id: 1003001020,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'inOrderCount30DaysSku',
                        elements: [],
                        required: true,
                        value: '100',
                        desc: '30天引单数量(sku维度)'
                      },
                      {
                        id: 1003001021,
                        pid: 1003001,
                        type: 'com.jd.kpl.SeckillInfo',
                        systemValue: false,
                        webPamer: 'seckillInfo',
                        elements: [
                          {
                            id: 1003001021001,
                            pid: 1003001021,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'seckillOriPrice',
                            elements: [],
                            required: true,
                            value: '36.9',
                            desc: '秒杀价原价'
                          },
                          {
                            id: 1003001021002,
                            pid: 1003001021,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'seckillPrice',
                            elements: [],
                            required: true,
                            value: '26.8',
                            desc: '秒杀价'
                          },
                          {
                            id: 1003001021003,
                            pid: 1003001021,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'seckillStartTime',
                            elements: [],
                            required: false,
                            value: '1574474399000',
                            desc: '秒杀开始时间(时间戳，毫秒)'
                          },
                          {
                            id: 1003001021004,
                            pid: 1003001021,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'seckillEndTime',
                            elements: [],
                            required: false,
                            value: '1574388000000',
                            desc: '秒杀结束时间(时间戳，毫秒)'
                          }
                        ],
                        required: false,
                        value: '无',
                        desc: '秒杀信息'
                      },
                      {
                        id: 1003001022,
                        pid: 1003001,
                        type: 'Number[]',
                        systemValue: false,
                        webPamer: 'jxFlags',
                        elements: [],
                        required: false,
                        value: '[1,2,3]',
                        desc:
                          '京喜商品类型，1京喜、2京喜工厂直供、3京喜优选（包含3时可在京东APP购买）'
                      },
                      {
                        id: 1003001023,
                        pid: 1003001,
                        type: 'com.jd.union.VideoInfo',
                        systemValue: false,
                        webPamer: 'videoInfo',
                        elements: [
                          {
                            id: 1003001023001,
                            pid: 1003001023,
                            type: 'com.jd.union.Video[]',
                            systemValue: false,
                            webPamer: 'videoList',
                            elements: [
                              {
                                id: 1003001023001001,
                                pid: 1003001023001,
                                type: 'com.jd.union.Video',
                                systemValue: false,
                                webPamer: 'video',
                                elements: [
                                  {
                                    id: 1003001023001001001,
                                    pid: 1003001023001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'width',
                                    elements: [],
                                    required: true,
                                    value: '400',
                                    desc: '宽'
                                  },
                                  {
                                    id: 1003001023001001002,
                                    pid: 1003001023001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'high',
                                    elements: [],
                                    required: true,
                                    value: '300',
                                    desc: '高'
                                  },
                                  {
                                    id: 1003001023001001003,
                                    pid: 1003001023001001,
                                    type: 'String',
                                    systemValue: false,
                                    webPamer: 'imageUrl',
                                    elements: [],
                                    required: true,
                                    value:
                                      'https://img.300hu.com/4c1f7a6atransbjngwcloud1oss/44128edd173016898433773569/imageSampleSnapshot/1555986468_406717890.100_2756.jpg',
                                    desc: '视频图片地址'
                                  },
                                  {
                                    id: 1003001023001001004,
                                    pid: 1003001023001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'videoType',
                                    elements: [],
                                    required: true,
                                    value: '1',
                                    desc: '1:主图，2：商详'
                                  },
                                  {
                                    id: 1003001023001001005,
                                    pid: 1003001023001001,
                                    type: 'String',
                                    systemValue: false,
                                    webPamer: 'playType',
                                    elements: [],
                                    required: true,
                                    value: 'high',
                                    desc: 'low：标清，high：高清'
                                  },
                                  {
                                    id: 1003001023001001006,
                                    pid: 1003001023001001,
                                    type: 'Number',
                                    systemValue: false,
                                    webPamer: 'duration',
                                    elements: [],
                                    required: true,
                                    value: '10',
                                    desc: '时长(单位:s)'
                                  },
                                  {
                                    id: 1003001023001001007,
                                    pid: 1003001023001001,
                                    type: 'String',
                                    systemValue: false,
                                    webPamer: 'playUrl',
                                    elements: [],
                                    required: true,
                                    value:
                                      'https://vod.https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/44128edd173016898433773569/v.f20.mp4?dockingId=2bc88c56-a44d-45c4-99b4-d9b68557e4e9storageSource=3.com/4c1f7a6atransbjngwcloud1oss/44128edd173016898433773569/v.f20.mp4?dockingId=2bc88c56-a44d-45c4-99b4-d9b68557e4e9storageSource=3',
                                    desc: '播放地址'
                                  }
                                ],
                                required: false,
                                value: '无',
                                desc: '视频明细'
                              }
                            ],
                            required: false,
                            value: '无',
                            desc: '视频集合'
                          }
                        ],
                        required: false,
                        value: '无',
                        desc: '视频信息'
                      },
                      {
                        id: 1003001024,
                        pid: 1003001,
                        type: 'com.jd.union.DocumentInfo',
                        systemValue: false,
                        webPamer: 'documentInfo',
                        elements: [
                          {
                            id: 1003001024001,
                            pid: 1003001024,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'document',
                            elements: [],
                            required: true,
                            value:
                              '温和亲肤的配方 洁净面部污垢 为肌肤添加补水保湿养分 泡沫绵密丰富 温润不易紧绷 弱酸性氨基酸系 含有自然成分 容易冲洗',
                            desc: '描述文案'
                          },
                          {
                            id: 1003001024002,
                            pid: 1003001024,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'discount',
                            elements: [],
                            required: false,
                            value: '29.9碧素堂氨基酸洗面奶',
                            desc: '优惠力度文案'
                          }
                        ],
                        required: false,
                        value: '段子信息',
                        desc: '段子信息'
                      },
                      {
                        id: 1003001025,
                        pid: 1003001,
                        type: 'com.jd.union.BookInfo',
                        systemValue: false,
                        webPamer: 'bookInfo',
                        elements: [
                          {
                            id: 1003001025001,
                            pid: 1003001025,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'isbn',
                            elements: [],
                            required: false,
                            value: '9787515515564',
                            desc: '图书编号'
                          }
                        ],
                        required: false,
                        value: '无',
                        desc: '图书信息'
                      },
                      {
                        id: 1003001026,
                        pid: 1003001,
                        type: 'Number[]',
                        systemValue: false,
                        webPamer: 'forbidTypes',
                        elements: [],
                        required: false,
                        value: '[0,10,11]',
                        desc:
                          '0普通商品，10微信京东购物小程序禁售，11微信京喜小程序禁售'
                      },
                      {
                        id: 1003001027,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'deliveryType',
                        elements: [],
                        required: false,
                        value: '1',
                        desc: '京东配送 1：是，0：不是'
                      },
                      {
                        id: 1003001028,
                        pid: 1003001,
                        type: 'com.jd.union.SkuLabelInfo',
                        systemValue: false,
                        webPamer: 'skuLabelInfo',
                        elements: [
                          {
                            id: 1003001028001,
                            pid: 1003001028,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'is7ToReturn',
                            elements: [],
                            required: false,
                            value: '1',
                            desc:
                              '0：不支持；  1或null：支持7天无理由退货；  2：支持90天无理由退货；  4：支持15天无理由退货；  6：支持30天无理由退货；'
                          },
                          {
                            id: 1003001028002,
                            pid: 1003001028,
                            type: 'com.jd.kpl.CharacteristicServiceInfo[]',
                            systemValue: false,
                            webPamer: 'fxgServiceList',
                            elements: [
                              {
                                id: 1003001028002001,
                                pid: 1003001028002,
                                type: 'com.jd.kpl.CharacteristicServiceInfo',
                                systemValue: false,
                                webPamer: 'characteristicServiceInfo',
                                elements: [
                                  {
                                    id: 1003001028002001001,
                                    pid: 1003001028002001,
                                    type: 'String',
                                    systemValue: false,
                                    webPamer: 'serviceName',
                                    elements: [],
                                    required: false,
                                    value: '破损包退换',
                                    desc: '服务名称'
                                  }
                                ],
                                required: false,
                                value: '',
                                desc: '放心购商品子标签，此字段值可能为空'
                              }
                            ],
                            required: false,
                            value: '',
                            desc: '放心购商品子标签集合'
                          },
                          {
                            id: 1003001028003,
                            pid: 1003001028,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'fxg',
                            elements: [],
                            required: false,
                            value: '1',
                            desc: '1：放心购商品'
                          }
                        ],
                        required: false,
                        value: '',
                        desc: '商品标签'
                      },
                      {
                        id: 1003001029,
                        pid: 1003001,
                        type: 'com.jd.union.PromotionLabelInfo[]',
                        systemValue: false,
                        webPamer: 'promotionLabelInfoList',
                        elements: [
                          {
                            id: 1003001029001,
                            pid: 1003001029,
                            type: 'com.jd.union.PromotionLabelInfo',
                            systemValue: false,
                            webPamer: 'promotionLabelInfo',
                            elements: [
                              {
                                id: 1003001029001001,
                                pid: 1003001029001,
                                type: 'String',
                                systemValue: false,
                                webPamer: 'promotionLabel',
                                elements: [],
                                required: false,
                                value: '满2件，总价打8折',
                                desc: '商品促销文案'
                              },
                              {
                                id: 1003001029001002,
                                pid: 1003001029001,
                                type: 'String',
                                systemValue: false,
                                webPamer: 'lableName',
                                elements: [],
                                required: false,
                                value: '满折',
                                desc: '促销标签名称'
                              },
                              {
                                id: 1003001029001003,
                                pid: 1003001029001,
                                type: 'Number',
                                systemValue: false,
                                webPamer: 'startTime',
                                elements: [],
                                required: false,
                                value: '1608998400000',
                                desc: '促销开始时间'
                              },
                              {
                                id: 1003001029001004,
                                pid: 1003001029001,
                                type: 'Number',
                                systemValue: false,
                                webPamer: 'endTime',
                                elements: [],
                                required: false,
                                value: '1608998400000',
                                desc: '促销结束时间'
                              },
                              {
                                id: 1003001029001005,
                                pid: 1003001029001,
                                type: 'Number',
                                systemValue: false,
                                webPamer: 'promotionLableId',
                                elements: [],
                                required: false,
                                value: '5000125161',
                                desc: '促销ID'
                              }
                            ],
                            required: false,
                            value: '',
                            desc: '商品促销标签'
                          }
                        ],
                        required: false,
                        value: '',
                        desc: '商品促销标签集'
                      },
                      {
                        id: 1003001030,
                        pid: 1003001,
                        type: 'com.jd.union.SecondPriceInfo[]',
                        systemValue: false,
                        webPamer: 'secondPriceInfoList',
                        elements: [
                          {
                            id: 1003001030001,
                            pid: 1003001030,
                            type: 'com.jd.union.SecondPriceInfo',
                            systemValue: false,
                            webPamer: 'secondPriceInfo',
                            elements: [
                              {
                                id: 1003001030001001,
                                pid: 1003001030001,
                                type: 'Number',
                                systemValue: false,
                                webPamer: 'secondPriceType',
                                elements: [],
                                required: false,
                                value: '2',
                                desc: '双价格类型：18新人价，2plus会员价'
                              },
                              {
                                id: 1003001030001002,
                                pid: 1003001030001,
                                type: 'Number',
                                systemValue: false,
                                webPamer: 'secondPrice',
                                elements: [],
                                required: false,
                                value: '8.8',
                                desc: '价格（资源位238新人价请使用此价格）'
                              }
                            ],
                            required: false,
                            value: '',
                            desc: '双价格信息'
                          }
                        ],
                        required: false,
                        value: '',
                        desc: '双价格'
                      },
                      {
                        id: 1003001031,
                        pid: 1003001,
                        type: 'com.jd.union.PreSaleInfo',
                        systemValue: false,
                        webPamer: 'preSaleInfo',
                        elements: [
                          {
                            id: 1003001031001,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'currentPrice',
                            elements: [],
                            required: false,
                            value: '100',
                            desc: '预售价格'
                          },
                          {
                            id: 1003001031002,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'earnest',
                            elements: [],
                            required: false,
                            value: '15',
                            desc: '订金金额（定金不能超过预售总价的20%）'
                          },
                          {
                            id: 1003001031003,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'preSalePayType',
                            elements: [],
                            required: false,
                            value: '1',
                            desc:
                              '预售支付类型：1.仅全款 2.定金、全款均可 5.一阶梯仅定金'
                          },
                          {
                            id: 1003001031004,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'discountType',
                            elements: [],
                            required: false,
                            value: '1',
                            desc: '1: 定金膨胀  2: 定金立减'
                          },
                          {
                            id: 1003001031005,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'depositWorth',
                            elements: [],
                            required: false,
                            value: '10',
                            desc: '定金膨胀金额（定金可抵XXX）【废弃】'
                          },
                          {
                            id: 1003001031006,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'preAmountDeposit',
                            elements: [],
                            required: false,
                            value: '10',
                            desc: '立减金额'
                          },
                          {
                            id: 1003001031007,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'preSaleStartTime',
                            elements: [],
                            required: false,
                            value: '1546444800000',
                            desc: '定金开始时间'
                          },
                          {
                            id: 1003001031008,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'preSaleEndTime',
                            elements: [],
                            required: false,
                            value: '1546444800000',
                            desc: '定金结束时间'
                          },
                          {
                            id: 1003001031009,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'balanceStartTime',
                            elements: [],
                            required: false,
                            value: '1546444800000',
                            desc: '尾款开始时间'
                          },
                          {
                            id: 1003001031010,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'balanceEndTime',
                            elements: [],
                            required: false,
                            value: '1546444800000',
                            desc: '尾款结束时间'
                          },
                          {
                            id: 1003001031011,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'shipTime',
                            elements: [],
                            required: false,
                            value: '1546444800000',
                            desc: '预计发货时间'
                          },
                          {
                            id: 1003001031012,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'preSaleStatus',
                            elements: [],
                            required: false,
                            value: '1',
                            desc:
                              '预售状态（0 未开始；1 预售中；2 预售结束；3 尾款进行中；4 尾款结束）'
                          },
                          {
                            id: 1003001031013,
                            pid: 1003001031,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'amountDeposit',
                            elements: [],
                            required: false,
                            value: '10',
                            desc: '定金膨胀金额（定金可抵XXX）'
                          }
                        ],
                        required: false,
                        value: '',
                        desc: '预售信息'
                      },
                      {
                        id: 1003001032,
                        pid: 1003001,
                        type: 'com.jd.union.ReserveInfo',
                        systemValue: false,
                        webPamer: 'reserveInfo',
                        elements: [
                          {
                            id: 1003001032001,
                            pid: 1003001032,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'price',
                            elements: [],
                            required: false,
                            value: '15',
                            desc: '预约价格'
                          },
                          {
                            id: 1003001032002,
                            pid: 1003001032,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'type',
                            elements: [],
                            required: false,
                            value: '1',
                            desc:
                              '预约类型：  1：预约购买资格（仅预约的用户才可以进行购买）；  5：预约抽签（仅中签用户可购买）'
                          },
                          {
                            id: 1003001032003,
                            pid: 1003001032,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'status',
                            elements: [],
                            required: false,
                            value: '1',
                            desc:
                              '1：等待预约  2：预约中  3：等待抢购/抽签中  4：抢购中  5：抢购结束'
                          },
                          {
                            id: 1003001032004,
                            pid: 1003001032,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'startTime',
                            elements: [],
                            required: false,
                            value: '1601364491000',
                            desc: '预定开始时间'
                          },
                          {
                            id: 1003001032005,
                            pid: 1003001032,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'endTime',
                            elements: [],
                            required: false,
                            value: '1601364491000',
                            desc: '预定结束时间'
                          },
                          {
                            id: 1003001032006,
                            pid: 1003001032,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'panicBuyingStartTime',
                            elements: [],
                            required: false,
                            value: '1601364491000',
                            desc: '抢购开始时间'
                          },
                          {
                            id: 1003001032007,
                            pid: 1003001032,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'panicBuyingEndTime',
                            elements: [],
                            required: false,
                            value: '1601364491000',
                            desc: '抢购结束时间'
                          }
                        ],
                        required: false,
                        value: '',
                        desc: '预约信息'
                      },
                      {
                        id: 1003001033,
                        pid: 1003001,
                        type: 'com.jd.union.SolitaireActivity',
                        systemValue: false,
                        webPamer: 'solitaireActivity',
                        elements: [
                          {
                            id: 1003001033001,
                            pid: 1003001033,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'activityId',
                            elements: [],
                            required: false,
                            value: '854729',
                            desc:
                              '接龙活动id，订单接龙商品链接（推广订单接龙商品时用该链接转链）： https://item.jd.com/?activityId=xxxx%26skuId=xxxx%26page=chain'
                          },
                          {
                            id: 1003001033002,
                            pid: 1003001033,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'groupPrice',
                            elements: [],
                            required: false,
                            value: '15',
                            desc: '成团价'
                          },
                          {
                            id: 1003001033003,
                            pid: 1003001033,
                            type: 'Number',
                            systemValue: false,
                            webPamer: 'groupProgress',
                            elements: [],
                            required: false,
                            value: '50',
                            desc: '成团进度（0-100）'
                          },
                          {
                            id: 1003001033004,
                            pid: 1003001033,
                            type: 'String',
                            systemValue: false,
                            webPamer: 'reason',
                            elements: [],
                            required: false,
                            value: '推荐理由',
                            desc: '推荐理由'
                          }
                        ],
                        required: false,
                        value: '',
                        desc: '订单接龙活动信息'
                      },
                      {
                        id: 1003001034,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'isOversea',
                        elements: [],
                        required: false,
                        value: '1',
                        desc: '是否全球购商品 1：是'
                      },
                      {
                        id: 1003001035,
                        pid: 1003001,
                        type: 'Number',
                        systemValue: false,
                        webPamer: 'companyType',
                        elements: [],
                        required: false,
                        value: '2',
                        desc: '2：POP自然人小店'
                      }
                    ],
                    required: true,
                    value: '无',
                    desc: '数据明细'
                  }
                ],
                required: true,
                value: '无',
                desc: '数据明细'
              },
              {
                id: 1004,
                pid: 1,
                type: 'Number',
                systemValue: false,
                webPamer: 'totalCount',
                elements: [],
                required: true,
                value: '100',
                desc: '有效商品总数量，上限1w'
              }
            ],
            required: false,
            value: '',
            desc: '返回结果'
          }
        ]
      },
      auth: 'false'
    },
    apiErrorsDTOS: [
      { code: '200', error: '调用成功', solution: '调用成功' },
      {
        code: '202',
        error: '已达到分页上限',
        solution: '减小分页重试'
      },
      { code: '401', error: '参数错误', solution: '请按文档要求入参' },
      {
        code: '500',
        error: '服务系统异常',
        solution: '稍后重试'
      },
      { code: '408', error: 'unionid被限制调用', solution: '联系联盟商务' }
    ],
    apiErrorResponseExampleDTO: {
      jsonErrorExample:
        '{\n    "code": "408",\n    "errorMessage": "unionid被限制调用",\n    "errorSolution": "联系联盟商务"\n}',
      xmlErrorExample:
        '<?xml version="1.0" encoding="UTF-8"?>\n<object>\n  <code>408</code>\n  <errorMessage>unionid被限制调用</errorMessage>\n  <errorSolution>联系联盟商务</errorSolution>\n</object>\n'
    }
  },
  requestId: 'om_0b118b51_lein2v1v_1889'
}

export class JdUnionGoods extends JdUnionBase {
  /**
   * 京东联盟精选优质商品，每日更新，可通过频道ID查询各个频道下的精选商品。
   * 用获取的优惠券链接调用转链接口时，需传入搜索接口link字段返回的原始优惠券链接，
   * 切勿对链接进行任何encode、decode操作，否则将导致转链二合一推广链接时校验失败。
   * @param params
   */
  async queryJingfenGoods(params: {
    eliteId: EliteIdType
    /**页码，默认1*/
    pageIndex?: number
    /**每页数量，默认20，上限50，建议20*/
    pageSize?: number
    /** 排序字段(
     * price：单价,
     * commissionShare：佣金比例,
     * commission：佣金，
     * inOrderCount30DaysSku：sku维度30天引单量，
     * comments：评论数，
     * goodComments：好评数)*/
    sortName?:
      | 'price'
      | 'commissionShare'
      | 'commission'
      | 'inOrderCount30DaysSku'
      | 'comments'
      | 'goodComments'
    /**默认降序*/
    sort?: 'asc' | 'desc'
    /**联盟id_应用id_推广位id，三段式*/
    pid?: string
    /**支持出参数据筛选，逗号','分隔，目前可用：
     * videoInfo(视频信息),
     * hotWords(热词),
     * similar(相似推荐商品),
     * documentInfo(段子信息)，
     * skuLabelInfo（商品标签），
     * promotionLabelInfo（商品促销标签）,
     * companyType（小店标识）*/
    fields?: string
    /**逗号','分隔
     * 10微信京东购物小程序禁售
     * 11微信京喜小程序禁售*/
    forbidTypes?: string
    /** 选品库id（仅对eliteId=1001和519有效，且必传）*/
    groupId?: number
    /**groupId创建者的UnionId*/
    ownerUnionId?: number
    /**订单接龙活动时间，当eliteId=515订单接龙商品时，需要传入该字段，默认是0。
     * 0-当天，1-明天，2-后天。*/
    timeType?: number
  }) {
    return this.execute<{
      /**有效商品总数量，上限1w*/
      totalCount: number
      data: Array<{
        jfGoodsResp: {}
      }>
    }>('jd.union.open.goods.jingfen.query', { goodsReq: params }, '200')
  }
}
