#!/bin/bash

pwd;
ls 'AccGateBackend/src/main/webapp/';
rm -rf 'AccGateBackend/src/main/webapp/';
mkdir 'AccGateBackend/src/main/webapp';
sleep 1;

taskkill /IM 'C:\niv\download\OpenJDK8U-jdk_x64_windows_hotspot_8u322b06\jdk8u322-b06\bin\java.exe';

#ls -la '/c/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/dist';
#rm -rf '/c/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/dist';
#echo ls -la '/c/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/dist';
#ls dist;
# rm -rf dist;
# echo ls dist;
# cd /c/niv/web/accWebRT-collected/AccWebAgent/accapi_client;
# npm run build;
#bestzip dist3.war dist/   WEB-INF/
#cd dist; jar cvf ../dist1.war .; cd ../;
#sleep 0.3
#cp -r dist/  'C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\'
#sleep 0.3
#cp -r  WEB-INF/ '/c/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/dist/'
