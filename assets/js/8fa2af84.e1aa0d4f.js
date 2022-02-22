"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[835],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(7294),o=t(2389),i=t(9443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(3616),l=t(6010),u="tabItem_vU9c";function p(e){var n,t,o,i=e.lazy,p=e.block,m=e.defaultValue,d=e.values,f=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,c.lx)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),S=k.tabGroupChoices,B=k.setTabGroupChoices,x=(0,r.useState)(b),C=x[0],H=x[1],w=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=S[f];null!=E&&E!==C&&h.some((function(e){return e.value===E}))&&H(E)}var N=function(e){var n=e.currentTarget,t=w.indexOf(n),a=h[t].value;a!==C&&(T(n),H(a),null!=f&&B(f,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:N,onClick:N},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},6654:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(6396),s=t(8215),c=["components"],l={id:"Hbase-Connector",title:"Hbase Connector",sidebar_position:6},u=void 0,p={unversionedId:"connector/Hbase-Connector",id:"connector/Hbase-Connector",title:"Hbase Connector",description:"HBase\u662f\u4e00\u4e2a\u9ad8\u53ef\u9760\u6027\u3001\u9ad8\u6027\u80fd\u3001\u9762\u5411\u5217\u3001\u53ef\u4f38\u7f29\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u7cfb\u7edf\uff0c\u5229\u7528HBase\u6280\u672f\u53ef\u5728\u5ec9\u4ef7PC Server",source:"@site/docs/connector/hbase.md",sourceDirName:"connector",slug:"/connector/Hbase-Connector",permalink:"/docs/connector/Hbase-Connector",editUrl:"https://github.com/streamxhub/streamx-website/edit/dev/docs/connector/hbase.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"Hbase-Connector",title:"Hbase Connector",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Redis Connector",permalink:"/docs/connector/Redis-Connector"},next:{title:"MongoDb Connector",permalink:"/docs/connector/MongoDb-Connector"}},m=[{value:"HBase\u5199\u5165\u4f9d\u8d56",id:"hbase\u5199\u5165\u4f9d\u8d56",children:[],level:2},{value:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165\u8bfb\u53d6Hbase",id:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165\u8bfb\u53d6hbase",children:[{value:"1.\u521b\u5efa\u5e93\u8868",id:"1\u521b\u5efa\u5e93\u8868",children:[],level:3},{value:"2.\u5199\u5165\u8bfb\u53d6demo",id:"2\u5199\u5165\u8bfb\u53d6demo",children:[],level:3}],level:2},{value:"StreamX \u8bfb\u5199 Hbase",id:"streamx-\u8bfb\u5199-hbase",children:[{value:"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",children:[],level:3},{value:"2. \u8bfb\u5199\u5165Hbase",id:"2-\u8bfb\u5199\u5165hbase",children:[],level:3}],level:2},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",children:[],level:2}],d={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hbase.apache.org/book.html"},"HBase"),"\u662f\u4e00\u4e2a\u9ad8\u53ef\u9760\u6027\u3001\u9ad8\u6027\u80fd\u3001\u9762\u5411\u5217\u3001\u53ef\u4f38\u7f29\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u7cfb\u7edf\uff0c\u5229\u7528HBase\u6280\u672f\u53ef\u5728\u5ec9\u4ef7PC Server\n\u4e0a\u642d\u5efa\u8d77\u5927\u89c4\u6a21\u7ed3\u6784\u5316\u5b58\u50a8\u96c6\u7fa4\u3002 HBase\u4e0d\u540c\u4e8e\u4e00\u822c\u7684\u5173\u7cfb\u6570\u636e\u5e93\uff0c\u5b83\u662f\u4e00\u4e2a\u9002\u5408\u4e8e\u975e\u7ed3\u6784\u5316\u6570\u636e\u5b58\u50a8\u7684\u6570\u636e\u5e93\uff0cHBase\u57fa\u4e8e\u5217\u7684\u800c\u4e0d\u662f\u57fa\u4e8e\u884c\u7684\u6a21\u5f0f\u3002"),(0,o.kt)("p",null,"flink\u5b98\u65b9\u672a\u63d0\u4f9bHbase DataStream\u7684\u8fde\u63a5\u5668\u3002StreamX \u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"Hbase-client"),"\u5c01\u88c5\u4e86HBaseSource\u3001HBaseSink,\u652f\u6301\u4f9d\u636e\u914d\u7f6e\u81ea\u52a8\u521b\u5efa\u8fde\u63a5\uff0c\u7b80\u5316\u5f00\u53d1\u3002\nStreamX \u8bfb\u53d6Hbase\u5728\u5f00\u542fchekpoint\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8bb0\u5f55\u8bfb\u53d6\u6570\u636e\u7684\u6700\u65b0\u72b6\u6001\uff0c\u901a\u8fc7\u6570\u636e\u672c\u8eab\u6807\u8bc6\u53ef\u4ee5\u6062\u590dsource\u5bf9\u5e94\u504f\u79fb\u91cf\u3002\u5b9e\u73b0source\u7aefAT_LEAST_ONCE(\u81f3\u5c11\u4e00\u6b21\u8bed\u4e49)\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","HbaseSource \u5b9e\u73b0\u4e86flink Async I/O\uff0c\u7528\u4e8e\u63d0\u5347streaming\u7684\u541e\u5410\u91cf\uff0csink\u7aef\u9ed8\u8ba4\u652f\u6301AT_LEAST_ONCE (\u81f3\u5c11\u4e00\u6b21)\u7684\u5904\u7406\u8bed\u4e49\u3002\u5728\u5f00\u542fcheckpoint\u60c5\u51b5\u4e0b\u652f\u6301EXACTLY_ONCE()\u7cbe\u786e\u4e00\u6b21\u8bed\u4e49\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"StreamX \u8bfb\u53d6HBASE\u5728\u5f00\u542fchekpoint\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8bb0\u5f55\u8bfb\u53d6\u6570\u636e\u7684\u6700\u65b0\u72b6\u6001\uff0c\u4f5c\u4e1a\u6062\u590d\u540e\u4ece\u662f\u5426\u53ef\u4ee5\u6062\u590d\u4e4b\u524d\u72b6\u6001\u5b8c\u5168\u53d6\u51b3\u4e8e\u6570\u636e\u672c\u8eab\u662f\u5426\u6709\u504f\u79fb\u91cf\u7684\u6807\u8bc6\uff0c\u9700\u8981\u5728\u4ee3\u7801\u624b\u52a8\u6307\u5b9a\u3002\n\u5728HBaseSource\u7684getDataStream\u65b9\u6cd5func\u53c2\u6570\u6307\u5b9a\u6062\u590d\u903b\u8f91\u3002"))),(0,o.kt)("h2",{id:"hbase\u5199\u5165\u4f9d\u8d56"},"HBase\u5199\u5165\u4f9d\u8d56"),(0,o.kt)("p",null,"HBase Maven\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.hbase</groupId>\n<artifactId>hbase-client</artifactId>\n<version>${hbase.version}</version>\n</dependency>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n<groupId>org.apache.hbase</groupId>\n<artifactId>hbase-common</artifactId>\n<version>${hbase.version}</version>\n</dependency>\n")),(0,o.kt)("h2",{id:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165\u8bfb\u53d6hbase"},"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165\u8bfb\u53d6Hbase"),(0,o.kt)("h3",{id:"1\u521b\u5efa\u5e93\u8868"},"1.\u521b\u5efa\u5e93\u8868"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," create 'Student', {NAME => 'Stulnfo', VERSIONS => 3}, {NAME =>'Grades', BLOCKCACHE => true} \n")),(0,o.kt)("h3",{id:"2\u5199\u5165\u8bfb\u53d6demo"},"2.\u5199\u5165\u8bfb\u53d6demo"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u8bfb\u53d6\u6570\u636e",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.flink.configuration.Configuration;\nimport org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.api.functions.source.RichSourceFunction;\nimport org.apache.hadoop.hbase.Cell;\nimport org.apache.hadoop.hbase.HBaseConfiguration;\nimport org.apache.hadoop.hbase.TableName;\nimport org.apache.hadoop.hbase.client.*;\nimport org.apache.hadoop.hbase.util.Bytes;\n\nimport java.util.List;\n\n\npublic class FlinkHBaseReader {\n    public static void main(String[] args) throws Exception {\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        // \u6dfb\u52a0\u6570\u636e\u6e90\n        DataStream<String> stream = env.addSource(new HBaseReader());\n        stream.print();\n        env.execute("FlinkHBaseDemo");\n    }\n}\n\n\nclass HBaseReader extends RichSourceFunction<String> {\n    private Connection connection = null;\n    private ResultScanner rs = null;\n    private Table table = null;\n\n    @Override\n    public void open(Configuration parameters) throws Exception {\n        org.apache.hadoop.conf.Configuration hconf = HBaseConfiguration.create();\n        hconf.set("hbase.zookeeper.quorum", "localhost:2181");\n        hconf.set("zookeeper.property.clientPort", "/hbase");\n        connection = ConnectionFactory.createConnection(hconf);\n    }\n\n    @Override\n    public void run(SourceContext<String> sourceContext) throws Exception {\n        table = connection.getTable(TableName.valueOf("Student"));\n        Scan scan = new Scan();\n        scan.addFamily(Bytes.toBytes("Stulnfo"));\n        rs = table.getScanner(scan);\n        for (Result result : rs) {\n            StringBuilder sb = new StringBuilder();\n            List<Cell> cells = result.listCells();\n            for (Cell cell : cells) {\n                String value = Bytes.toString(cell.getValueArray(), cell.getValueOffset(), cell.getValueLength());\n                sb.append(value).append("-");\n            }\n            String value = sb.replace(sb.length() - 1, sb.length(), "").toString();\n            sourceContext.collect(value);\n        }\n    }\n\n    @Override\n    public void cancel() {\n\n    }\n\n    @Override\n    public void close() throws Exception {\n        if (rs != null) {\n            rs.close();\n        }\n        if (table != null) {\n            table.close();\n        }\n        if (connection != null) {\n            connection.close();\n        }\n    }\n}\n'))),(0,o.kt)(s.Z,{value:"\u5199\u5165\u6570\u636e",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.zhisheng.common.utils.ExecutionEnvUtil;\nimport lombok.extern.slf4j.Slf4j;\nimport org.apache.flink.api.java.utils.ParameterTool;\nimport org.apache.flink.configuration.Configuration;\nimport org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.api.functions.sink.RichSinkFunction;\nimport org.apache.flink.streaming.api.functions.source.SourceFunction;\nimport org.apache.hadoop.hbase.HBaseConfiguration;\nimport org.apache.hadoop.hbase.TableName;\nimport org.apache.hadoop.hbase.client.*;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nimport java.io.IOException;\n\n/**\n * Desc: \u8bfb\u53d6\u6d41\u6570\u636e\uff0c\u7136\u540e\u5199\u5165\u5230 HBase\n */\n@Slf4j\npublic class HBaseStreamWriteMain {\n\n    public static void main(String[] args) throws Exception {\n        final ParameterTool parameterTool = ExecutionEnvUtil.createParameterTool(args);\n        StreamExecutionEnvironment env = ExecutionEnvUtil.prepare(parameterTool);\n        DataStream<String> dataStream = env.addSource(new SourceFunction<String>() {\n            private static final long serialVersionUID = 1L;\n\n            private volatile boolean isRunning = true;\n\n            @Override\n            public void run(SourceContext<String> out) throws Exception {\n                while (isRunning) {\n                    out.collect("name" + Math.floor(Math.random() * 100));\n                }\n            }\n\n            @Override\n            public void cancel() {\n                isRunning = false;\n            }\n        });\n        dataStream.addSink(new HBaseWriter());\n        env.execute("Flink HBase connector sink");\n    }\n\n\n}\n\n/**\n * \u5199\u5165HBase\n * \u7ee7\u627fRichSinkFunction\u91cd\u5199\u7236\u7c7b\u65b9\u6cd5\n * <p>\n * \u5199\u5165hbase\u65f6500\u6761flush\u4e00\u6b21, \u6279\u91cf\u63d2\u5165, \u4f7f\u7528\u7684\u662fwriteBufferSize\n */\nclass HBaseWriter extends RichSinkFunction<String> {\n    private static final Logger logger = LoggerFactory.getLogger(HBaseWriter.class);\n\n    private static org.apache.hadoop.conf.Configuration configuration;\n    private static Connection connection = null;\n    private static BufferedMutator mutator;\n    private static int count = 0;\n\n    @Override\n    public void open(Configuration parameters) throws Exception {\n        configuration = HBaseConfiguration.create();\n        configuration.set("hbase.zookeeper.quorum", "localhost:21981");\n        configuration.set("zookeeper.property.clientPort", "/hbase");\n        try {\n            connection = ConnectionFactory.createConnection(configuration);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n        BufferedMutatorParams params = new BufferedMutatorParams(TableName.valueOf("Student"));\n        params.writeBufferSize(2 * 1024 * 1024);\n        mutator = connection.getBufferedMutator(params);\n    }\n\n    @Override\n    public void close() throws IOException {\n        if (mutator != null) {\n            mutator.close();\n        }\n        if (connection != null) {\n            connection.close();\n        }\n    }\n\n    @Override\n    public void invoke(String values, Context context) throws Exception {\n        //Date 1970-01-06 11:45:55  to 445555000\n        long unixTimestamp = 0;\n        String RowKey = String.valueOf(unixTimestamp);\n        Put put = new Put(RowKey.getBytes());\n        put.addColumn("Stulnfo".getBytes(), "Name".getBytes(), values.getBytes());\n        mutator.mutate(put);\n        //\u6bcf\u6ee1500\u6761\u5237\u65b0\u4e00\u4e0b\u6570\u636e\n        if (count >= 500) {\n            mutator.flush();\n            count = 0;\n        }\n        count = count + 1;\n    }\n}\n')))),(0,o.kt)("p",null,"\u4ee5\u65b9\u5f0f\u8bfb\u5199Hbase\u8f83\u7e41\u7410\uff0c\u975e\u5e38\u7684\u4e0d\u7075\u654f\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"StreamX"),"\u4f7f\u7528\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e\u3001\u81ea\u52a8\u914d\u7f6e\u7684\u65b9\u5f0f\u53ea\u9700\u8981\u914d\u7f6eHbase\u8fde\u63a5\u53c2\u6570\u3001flink\u8fd0\u884c\u53c2\u6570\uff0cStreamX \u4f1a\u81ea\u52a8\u7ec4\u88c5source\u548csink\uff0c\u6781\u5927\u7684\u7b80\u5316\u5f00\u53d1\u903b\u8f91\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u7ef4\u62a4\u6027\u3002"),(0,o.kt)("h2",{id:"streamx-\u8bfb\u5199-hbase"},"StreamX \u8bfb\u5199 Hbase"),(0,o.kt)("h3",{id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"},"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# hbase\nhbase:\n  zookeeper.quorum: test1,test2,test6\n  zookeeper.property.clientPort: 2181\n  zookeeper.session.timeout: 1200000\n  rpc.timeout: 5000\n  client.pause: 20\n\n")),(0,o.kt)("h3",{id:"2-\u8bfb\u5199\u5165hbase"},"2. \u8bfb\u5199\u5165Hbase"),(0,o.kt)("p",null,"\u7528 StreamX \u5199\u5165Hbase\u975e\u5e38\u7b80\u5355,\u4ee3\u7801\u5982\u4e0b:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u8bfb\u53d6HBase",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'\nimport com.streamxhub.streamx.common.util.ConfigUtils\nimport com.streamxhub.streamx.flink.core.java.wrapper.HBaseQuery\nimport com.streamxhub.streamx.flink.core.scala.FlinkStreaming\nimport com.streamxhub.streamx.flink.core.scala.request.HBaseRequest\nimport com.streamxhub.streamx.flink.core.scala.source.HBaseSource\nimport org.apache.flink.api.scala.createTypeInformation\nimport org.apache.hadoop.hbase.CellUtil\nimport org.apache.hadoop.hbase.client.{Get, Scan}\nimport org.apache.hadoop.hbase.util.Bytes\n\nimport java.util\n\nobject HBaseSourceApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n\n    implicit val conf = ConfigUtils.getHBaseConfig(context.parameter.toMap)\n\n    val id = HBaseSource().getDataStream[String](query => {\n        new HBaseQuery("person", new Scan())\n    },\n      //\u4ee5\u4e0b\u65b9\u6cd5\u51b3\u5b9a\u4ececheckpoint\u6062\u590d\u504f\u79fb\u91cf\u7684\u903b\u8f91\n      r => new String(r.getRow), null)\n//flink Async I/O \n    HBaseRequest(id).requestOrdered(x => {\n      new HBaseQuery("person", new Get(x.getBytes()))\n    }, (a, r) => {\n      val map = new util.HashMap[String, String]()\n      val cellScanner = r.cellScanner()\n      while (cellScanner.advance()) {\n        val cell = cellScanner.current()\n        val q = Bytes.toString(CellUtil.cloneQualifier(cell))\n        val (name, v) = q.split("_") match {\n          case Array(_type, name) =>\n            _type match {\n              case "i" => name -> Bytes.toInt(CellUtil.cloneValue(cell))\n              case "s" => name -> Bytes.toString(CellUtil.cloneValue(cell))\n              case "d" => name -> Bytes.toDouble(CellUtil.cloneValue(cell))\n              case "f" => name -> Bytes.toFloat(CellUtil.cloneValue(cell))\n            }\n          case _ =>\n        }\n        map.put(name.toString, v.toString)\n      }\n      map.toString\n    }).print("Async")\n  }\n\n}\n\n'))),(0,o.kt)(s.Z,{value:"\u5199\u5165HBase",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.streamxhub.streamx.flink.core.scala.FlinkStreaming\nimport com.streamxhub.streamx.flink.core.scala.sink.{HBaseOutputFormat, HBaseSink}\nimport org.apache.flink.api.scala._\nimport com.streamxhub.streamx.common.util.ConfigUtils\nimport org.apache.hadoop.hbase.client.{Mutation, Put}\nimport org.apache.hadoop.hbase.util.Bytes\n\nimport java.util.{Collections, Random}\n\nobject HBaseSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n    val source = context.addSource(new TestSource)\n    val random = new Random()\n\n    //\u5b9a\u4e49\u8f6c\u6362\u89c4\u5219...\n    implicit def entry2Put(entity: TestEntity): java.lang.Iterable[Mutation] = {\n      val put = new Put(Bytes.toBytes(System.nanoTime() + random.nextInt(1000000)), entity.timestamp)\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("cid"), Bytes.toBytes(entity.cityId))\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("oid"), Bytes.toBytes(entity.orderId))\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("os"), Bytes.toBytes(entity.orderStatus))\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("oq"), Bytes.toBytes(entity.quantity))\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("sid"), Bytes.toBytes(entity.siteId))\n      Collections.singleton(put)\n    }\n    //source ===> trans ===> sink\n\n    //1\uff09\u63d2\u5165\u65b9\u5f0f1\n    HBaseSink().sink[TestEntity](source, "order")\n    //2) \u63d2\u5165\u65b9\u5f0f2\n    //1.\u6307\u5b9aHBase \u914d\u7f6e\u6587\u4ef6\n    implicit val prop = ConfigUtils.getHBaseConfig(context.parameter.toMap)\n    //2.\u63d2\u5165...\n    source.writeUsingOutputFormat(new HBaseOutputFormat[TestEntity]("order", entry2Put))\n\n\n  }\n\n}\n')))),(0,o.kt)("p",null,"StreamX \u5199\u5165Hbase \u9700\u8981\u521b\u5efaHBaseQuery\u7684\u65b9\u6cd5\u3001\u6307\u5b9a\u5c06\u67e5\u8be2\u7ed3\u679c\u8f6c\u5316\u4e3a\u9700\u8981\u5bf9\u8c61\u7684\u65b9\u6cd5\u3001\u6807\u8bc6\u662f\u5426\u5728\u8fd0\u884c\u3001\u4f20\u5165\u8fd0\u884c\u53c2\u6570\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"/**\n * @param ctx\n * @param property\n */\nclass HBaseSource(@(transient@param) val ctx: StreamingContext, property: Properties = new Properties()) {\n\n  /**\n   * @param query   \u6307\u5b9a\u521b\u5efaHBaseQuery\u7684\u65b9\u6cd5\n   * @param func    \u67e5\u8be2\u7ed3\u679c\u8f6c\u5316\u4e3a\u671f\u671b\u5bf9\u65b9\u65b9\u6cd5\n   * @param running \u8fd0\u884c\u6807\u8bc6\n   * @param prop    \u4f5c\u4e1a\u53c2\u6570\n   * @tparam R  \u8fd4\u56de\u7c7b\u578b\n   * @return\n   */\n  def getDataStream[R: TypeInformation](query: R => HBaseQuery,\n                                        func: Result => R,\n                                        running: Unit => Boolean)(implicit prop: Properties = new Properties()) = {\n    Utils.copyProperties(property, prop)\n    val hBaseFunc = new HBaseSourceFunction[R](prop, query, func, running)\n    ctx.addSource(hBaseFunc)\n  }\n\n}\n")),(0,o.kt)("p",null,"StreamX HbaseSource \u5b9e\u73b0\u4e86flink Async I/O \u7528\u4e8e\u63d0\u5347Streaming\u7684\u541e\u5410\u91cf\uff0c\u5148\u521b\u5efa DataStream \u7136\u540e\u521b\u5efa HBaseRequest \u8c03\u7528\nrequestOrdered\uff08\uff09 \u6216\u8005 requestUnordered\uff08\uff09 \u521b\u5efa\u5f02\u6b65\u6d41\uff0c\u5efa\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"class HBaseRequest[T: TypeInformation](@(transient@param) private val stream: DataStream[T], property: Properties = new Properties()) {\n\n  /**\n   *\n   * @param queryFunc\n   * @param resultFunc\n   * @param timeout\n   * @param capacity\n   * @param prop\n   * @tparam R\n   * @return\n   */\n  def requestOrdered[R: TypeInformation](queryFunc: T => HBaseQuery, resultFunc: (T, Result) => R, timeout: Long = 1000, capacity: Int = 10)(implicit prop: Properties): DataStream[R] = {\n    Utils.copyProperties(property, prop)\n    val async = new HBaseAsyncFunction[T, R](prop, queryFunc, resultFunc, capacity)\n    AsyncDataStream.orderedWait(stream, async, timeout, TimeUnit.MILLISECONDS, capacity)\n  }\n\n  /**\n   *\n   * @param queryFunc\n   * @param resultFunc\n   * @param timeout\n   * @param capacity\n   * @param prop\n   * @tparam R\n   * @return\n   */\n  def requestUnordered[R: TypeInformation](queryFunc: T => HBaseQuery, resultFunc: (T, Result) => R, timeout: Long = 1000, capacity: Int = 10)(implicit prop: Properties): DataStream[R] = {\n    Utils.copyProperties(property, prop)\n    val async = new HBaseAsyncFunction[T, R](prop, queryFunc, resultFunc, capacity)\n    AsyncDataStream.unorderedWait(stream, async, timeout, TimeUnit.MILLISECONDS, capacity)\n  }\n\n}\n")),(0,o.kt)("p",null,"Stramx\u652f\u6301\u4e24\u79cd\u65b9\u5f0f\u5199\u5165\u6570\u636e\uff1a1.addSink() 2. writeUsingOutputFormat \u6837\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'    //1\uff09\u63d2\u5165\u65b9\u5f0f1\n    HBaseSink().sink[TestEntity](source, "order")\n    //2) \u63d2\u5165\u65b9\u5f0f2\n    //1.\u6307\u5b9aHBase \u914d\u7f6e\u6587\u4ef6\n    implicit val prop = ConfigUtils.getHBaseConfig(context.parameter.toMap)\n    //2.\u63d2\u5165...\n    source.writeUsingOutputFormat(new HBaseOutputFormat[TestEntity]("order", entry2Put))\n')),(0,o.kt)("h2",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),(0,o.kt)("p",null,"\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ",(0,o.kt)("strong",{parentName:"p"},"StreamX")," \u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/development/conf"},"\u9879\u76ee\u914d\u7f6e")))}f.isMDXComponent=!0}}]);