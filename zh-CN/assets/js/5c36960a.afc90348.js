"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8736],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},i="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),i=p(t),m=n,u=i["".concat(c,".").concat(m)]||i[m]||k[m]||o;return t?a.createElement(u,s(s({ref:r},d),{},{components:t})):a.createElement(u,s({ref:r},d))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[i]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9305:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={id:"docker-deployment",title:"Docker \u5feb\u901f\u4f7f\u7528\u6559\u7a0b",sidebar_position:4},s=void 0,l={unversionedId:"user-guide/docker-deployment",id:"user-guide/docker-deployment",title:"Docker \u5feb\u901f\u4f7f\u7528\u6559\u7a0b",description:"\u672c\u6559\u7a0b\u4f7f\u7528 Docker \u5b8c\u6210StreamPark\u7684\u90e8\u7f72\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/4-dockerDeployment.md",sourceDirName:"user-guide",slug:"/user-guide/docker-deployment",permalink:"/zh-CN/docs/user-guide/docker-deployment",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/4-dockerDeployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"docker-deployment",title:"Docker \u5feb\u901f\u4f7f\u7528\u6559\u7a0b",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/user-guide/quick-start"},next:{title:"LDAP \u5feb\u901f\u4f7f\u7528\u6559\u7a0b",permalink:"/zh-CN/docs/user-guide/LDAP"}},c={},p=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u5b89\u88c5docker",id:"\u5b89\u88c5docker",level:3},{value:"\u5b89\u88c5docker-compose",id:"\u5b89\u88c5docker-compose",level:3},{value:"\u5feb\u901fStreamPark\u90e8\u7f72",id:"\u5feb\u901fstreampark\u90e8\u7f72",level:2},{value:"\u57fa\u4e8eh2\u548cdocker-compose\u8fdb\u884cStreamPark\u90e8\u7f72",id:"\u57fa\u4e8eh2\u548cdocker-compose\u8fdb\u884cstreampark\u90e8\u7f72",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:4},{value:"\u914d\u7f6eflink home",id:"\u914d\u7f6eflink-home",level:4},{value:"\u914d\u7f6esession\u96c6\u7fa4",id:"\u914d\u7f6esession\u96c6\u7fa4",level:4},{value:"\u63d0\u4ea4\u4efb\u52a1",id:"\u63d0\u4ea4\u4efb\u52a1",level:4},{value:"\u6cbf\u7528\u5df2\u6709\u7684 Mysql \u670d\u52a1",id:"\u6cbf\u7528\u5df2\u6709\u7684-mysql-\u670d\u52a1",level:3},{value:"\u6cbf\u7528\u5df2\u6709\u7684 Pgsql \u670d\u52a1",id:"\u6cbf\u7528\u5df2\u6709\u7684-pgsql-\u670d\u52a1",level:3},{value:"\u57fa\u4e8e\u6e90\u7801\u6784\u5efa\u955c\u50cf\u8fdb\u884cStreamPark\u90e8\u7f72",id:"\u57fa\u4e8e\u6e90\u7801\u6784\u5efa\u955c\u50cf\u8fdb\u884cstreampark\u90e8\u7f72",level:2},{value:"docker-compse\u914d\u7f6e",id:"docker-compse\u914d\u7f6e",level:2},{value:"\u4e0a\u4f20\u914d\u7f6e\u81f3\u5bb9\u5668",id:"\u4e0a\u4f20\u914d\u7f6e\u81f3\u5bb9\u5668",level:2}],d={toc:p};function i(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6559\u7a0b\u4f7f\u7528 Docker \u5b8c\u6210StreamPark\u7684\u90e8\u7f72\u3002"),(0,n.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Docker 1.13.1+\nDocker Compose 1.28.0+\n")),(0,n.kt)("h3",{id:"\u5b89\u88c5docker"},"\u5b89\u88c5docker"),(0,n.kt)("p",null,"\u4f7f\u7528 docker \u542f\u52a8\u670d\u52a1\uff0c\u9700\u8981\u5148\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker")),(0,n.kt)("h3",{id:"\u5b89\u88c5docker-compose"},"\u5b89\u88c5docker-compose"),(0,n.kt)("p",null,"\u4f7f\u7528 docker-compose \u542f\u52a8\u670d\u52a1\uff0c\u9700\u8981\u5148\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,n.kt)("h2",{id:"\u5feb\u901fstreampark\u90e8\u7f72"},"\u5feb\u901fStreamPark\u90e8\u7f72"),(0,n.kt)("h3",{id:"\u57fa\u4e8eh2\u548cdocker-compose\u8fdb\u884cstreampark\u90e8\u7f72"},"\u57fa\u4e8eh2\u548cdocker-compose\u8fdb\u884cStreamPark\u90e8\u7f72"),(0,n.kt)("p",null,"\u8be5\u65b9\u5f0f\u9002\u7528\u4e8e\u5165\u95e8\u5b66\u4e60\u3001\u719f\u6089\u529f\u80fd\u7279\u6027\uff0c\u5bb9\u5668\u91cd\u542f\u540e\u914d\u7f6e\u4f1a\u5931\u6548\uff0c\u4e0b\u65b9\u53ef\u4ee5\u914d\u7f6eMysql\u3001Pgsql\u8fdb\u884c\u6301\u4e45\u5316"),(0,n.kt)("h4",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://raw.githubusercontent.com/apache/incubator-streampark/dev/deploy/docker/docker-compose.yaml\nwget https://raw.githubusercontent.com/apache/incubator-streampark/dev/deploy/docker/.env\ndocker-compose up -d\n")),(0,n.kt)("p",null,"\u670d\u52a1\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 http://localhost:10000 \u8bbf\u95ee StreamPark\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7 http://localhost:8081\u8bbf\u95eeFlink\u3002\u8bbf\u95eeStreamPark\u94fe\u63a5\u540e\u4f1a\u8df3\u8f6c\u5230\u767b\u9646\u9875\u9762\uff0cStreamPark \u9ed8\u8ba4\u7684\u7528\u6237\u548c\u5bc6\u7801\u5206\u522b\u4e3a admin \u548c streampark\u3002\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u64cd\u4f5c\u8bf7\u53c2\u8003\u7528\u6237\u624b\u518c\u5feb\u901f\u4e0a\u624b\u3002\n",(0,n.kt)("img",{src:t(2590).Z,width:"719",height:"273"}),"\n\u8be5\u90e8\u7f72\u65b9\u5f0f\u4f1a\u81ea\u52a8\u7ed9\u4f60\u542f\u52a8\u4e00\u4e2aflink-session\u96c6\u7fa4\u4f9b\u4f60\u53bb\u8fdb\u884cflink\u4efb\u52a1\u4f7f\u7528\uff0c\u540c\u65f6\u4e5f\u4f1a\u6302\u8f7d\u672c\u5730docker\u670d\u52a1\u4ee5\u53ca~/.kube\u6765\u7528\u4e8ek8s\u6a21\u5f0f\u7684\u4efb\u52a1\u63d0\u4ea4"),(0,n.kt)("h4",{id:"\u914d\u7f6eflink-home"},"\u914d\u7f6eflink home"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(5816).Z,width:"1310",height:"498"})),(0,n.kt)("h4",{id:"\u914d\u7f6esession\u96c6\u7fa4"},"\u914d\u7f6esession\u96c6\u7fa4"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(4720).Z,width:"1302",height:"550"})),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a\u5728\u914d\u7f6eflink-sessin\u96c6\u7fa4\u5730\u5740\u65f6\uff0c\u586b\u5199\u7684ip\u5730\u5740\u4e0d\u662flocalhost\uff0c\u800c\u662f\u5bbf\u4e3b\u673a\u7f51\u7edcip\uff0c\u8be5ip\u5730\u5740\u53ef\u4ee5\u901a\u8fc7ifconfig\u6765\u8fdb\u884c\u83b7\u53d6"),(0,n.kt)("h4",{id:"\u63d0\u4ea4\u4efb\u52a1"},"\u63d0\u4ea4\u4efb\u52a1"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(4574).Z,width:"1207",height:"627"})),(0,n.kt)("h3",{id:"\u6cbf\u7528\u5df2\u6709\u7684-mysql-\u670d\u52a1"},"\u6cbf\u7528\u5df2\u6709\u7684 Mysql \u670d\u52a1"),(0,n.kt)("p",null,"\u8be5\u65b9\u5f0f\u9002\u7528\u4e8e\u4f01\u4e1a\u751f\u4ea7\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8edocker\u5feb\u901f\u90e8\u7f72strempark\u5e76\u5c06\u5176\u548c\u7ebf\u4e0a\u6570\u636e\u5e93\u8fdb\u884c\u5173\u8054\n\u6ce8\u610f\uff1a\u90e8\u7f72\u652f\u6301\u7684\u591a\u6837\u6027\u662f\u901a\u8fc7.env\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u6765\u8fdb\u884c\u7ef4\u62a4\u7684\uff0c\u8981\u4fdd\u8bc1\u76ee\u5f55\u4e0b\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a.env\u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://raw.githubusercontent.com/apache/incubator-streampark/dev/deploy/docker/docker-compose.yaml\nwget https://raw.githubusercontent.com/apache/incubator-streampark/dev/deploy/docker/mysql/.env\nvim .env\n")),(0,n.kt)("p",null,"\u9700\u8981\u5148\u5728mysql\u5148\u521b\u5efastreampark\u6570\u636e\u5e93\uff0c\u7136\u540e\u624b\u52a8\u6267\u884c\u5bf9\u5e94\u7684schema\u548cdata\u91cc\u9762\u5bf9\u5e94\u6570\u636e\u6e90\u7684sql"),(0,n.kt)("p",null,"\u7136\u540e\u4fee\u6539\u5bf9\u5e94\u7684\u8fde\u63a5\u4fe1\u606f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"SPRING_PROFILES_ACTIVE=mysql\nSPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/streampark?useSSL=false&useUnicode=true&characterEncoding=UTF-8&allowPublicKeyRetrieval=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8\nSPRING_DATASOURCE_USERNAME=root\nSPRING_DATASOURCE_PASSWORD=streampark\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d\n")),(0,n.kt)("h3",{id:"\u6cbf\u7528\u5df2\u6709\u7684-pgsql-\u670d\u52a1"},"\u6cbf\u7528\u5df2\u6709\u7684 Pgsql \u670d\u52a1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"wget https://raw.githubusercontent.com/apache/incubator-streampark/dev/deploy/docker/docker-compose.yaml\nwget https://raw.githubusercontent.com/apache/incubator-streampark/dev/deploy/docker/pgsql/.env\nvim .env\n")),(0,n.kt)("p",null,"\u4fee\u6539\u5bf9\u5e94\u7684\u8fde\u63a5\u4fe1\u606f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"SPRING_PROFILES_ACTIVE=pgsql\nSPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/streampark?stringtype=unspecified\nSPRING_DATASOURCE_USERNAME=postgres\nSPRING_DATASOURCE_PASSWORD=streampark\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d\n")),(0,n.kt)("h2",{id:"\u57fa\u4e8e\u6e90\u7801\u6784\u5efa\u955c\u50cf\u8fdb\u884cstreampark\u90e8\u7f72"},"\u57fa\u4e8e\u6e90\u7801\u6784\u5efa\u955c\u50cf\u8fdb\u884cStreamPark\u90e8\u7f72"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/apache/incubator-streampark.git\ncd incubator-streampark/deploy/docker\nvim docker-compose.yaml\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"    build:\n      context: ../..\n      dockerfile: deploy/docker/Dockerfile\n#   image: ${HUB}:${TAG}\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(5307).Z,width:"869",height:"361"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd ../..\n./build.sh\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(2960).Z,width:"1142",height:"544"})),(0,n.kt)("h2",{id:"docker-compse\u914d\u7f6e"},"docker-compse\u914d\u7f6e"),(0,n.kt)("p",null,"docker-compose.yaml\u4f1a\u5f15\u7528env\u6587\u4ef6\u7684\u914d\u7f6e\uff0c\u4fee\u6539\u540e\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.8'\nservices:\n  ## streampark-console\u5bb9\u5668\n  streampark-console:\n    ## streampark\u7684\u955c\u50cf\n    image: apache/streampark:latest\n    ## streampark\u7684\u955c\u50cf\u542f\u52a8\u547d\u4ee4\n    command: ${\n   RUN_COMMAND}\n    ports:\n      - 10000:10000\n    ## \u73af\u5883\u914d\u7f6e\u6587\u4ef6\n    env_file: .env\n    environment:\n      ## \u58f0\u660e\u73af\u5883\u53d8\u91cf\n      HADOOP_HOME: ${\n   HADOOP_HOME}\n    volumes:\n      - flink:/streampark/flink/${\n   FLINK}\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /etc/hosts:/etc/hosts:ro\n      - ~/.kube:/root/.kube:ro\n    privileged: true\n    restart: unless-stopped\n    networks:\n      - streampark\n\n  ## flink-jobmanager\u5bb9\u5668\n  flink-jobmanager:\n    image: ${\n   FLINK_IMAGE}\n    ports:\n      - \"8081:8081\"\n    command: jobmanager\n    volumes:\n      - flink:/opt/flink\n    env_file: .env\n    restart: unless-stopped\n    privileged: true\n    networks:\n      - streampark\n\n  ## streampark-taskmanager\u5bb9\u5668\n  flink-taskmanager:\n    image: ${\n   FLINK_IMAGE}\n    depends_on:\n      - flink-jobmanager\n    command: taskmanager\n    deploy:\n      replicas: 1\n    env_file: .env\n    restart: unless-stopped\n    privileged: true\n    networks:\n      - streampark\n\nnetworks:\n  streampark:\n    driver: bridge\n\nvolumes:\n  flink:\n")),(0,n.kt)("p",null,"\u6700\u540e\uff0c\u6267\u884c\u542f\u52a8\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd deploy/docker\ndocker-compose up -d\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528docker ps\u6765\u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f\uff0c\u663e\u793a\u5982\u4e0b\u4fe1\u606f\uff0c\u8868\u793a\u5b89\u88c5\u6210\u529f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(9053).Z,width:"1080",height:"134"})),(0,n.kt)("h2",{id:"\u4e0a\u4f20\u914d\u7f6e\u81f3\u5bb9\u5668"},"\u4e0a\u4f20\u914d\u7f6e\u81f3\u5bb9\u5668"),(0,n.kt)("p",null,"\u5728\u524d\u9762\u7684env\u6587\u4ef6\uff0c\u58f0\u660e\u4e86HADOOP_HOME\uff0c\u5bf9\u5e94\u7684\u76ee\u5f55\u4e3a\u201c/streampark/hadoop\u201d\uff0c\u6240\u4ee5\u9700\u8981\u4e0a\u4f20hadoop\u5b89\u88c5\u5305\u4e0b\u7684/etc/hadoop\u81f3/streampark/hadoop\u76ee\u5f55\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"## \u4e0a\u4f20hadoop\u8d44\u6e90\ndocker cp etc\u6574\u4e2a\u76ee\u5f55 streampark-docker_streampark-console_1:/streampark/hadoop\n## \u8fdb\u5165\u5bb9\u5668\ndocker exec -it streampark-docker_streampark-console_1 bash\n## \u67e5\u770b\nls\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(2265).Z,width:"1080",height:"87"})),(0,n.kt)("p",null,"\u540c\u65f6\uff0c\u5176\u5b83\u914d\u7f6e\u6587\u4ef6\uff0c\u5982maven\u7684settings.xml\u6587\u4ef6\u4e5f\u662f\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u4e0a\u4f20\u3002"))}i.isMDXComponent=!0},4720:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/remote-c75d520f5a61d9f100c0e1c58d304eb3.png"},4574:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/remoteSubmission-390200dc9d1b5a55add19d303add2698.png"},2960:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/streampark_build-07b45fc6f25a8f8fadaea22876e7fa9d.png"},2590:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/streampark_docker-compose-b54adcb7090f479ccb4db544ac8577b9.png"},2265:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/streampark_docker_ls_hadoop-8e7848bd06b4c193ef02d0f722ad006a.png"},9053:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/streampark_docker_ps-c715c198d48a9cffef4731beedef4f94.png"},5816:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/streampark_flinkhome-d6e90dd6fa04a003feef2eb6086ca3c3.png"},5307:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/streampark_source_generation_image-08a13916aae76f8d475ae5c00a87a280.png"}}]);