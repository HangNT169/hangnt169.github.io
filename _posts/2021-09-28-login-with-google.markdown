---
layout: post
title: Đăng nhập ứng dụng, Website bằng tài khoản Google.
subtitle: Đăng nhập ứng dụng, Website bằng tài khoản Google.
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/loginaaa.png
share-img: /assets/img/path.jpg
tags: [Đăng nhập ứng dụng, Website bằng tài khoản Google.]
---
## Giới thiệu
Trong trường hợp khi truy cập 1 website hay ứng dụng ta thường thấy có chức năng đăng nhập mà không cần sử dụng tài khoản của ứng dụng, web đó.
Ví dụ trên trang [codelearn](https://codelearn.io/)

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/login/1.png)

## Tạo ứng dụng Google+ để đăng nhập với google
Truy cập Google [Cloud Platform](https://console.cloud.google.com/project/_/apiui/apis/library) để tạo project.
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/login/2.png)
Chọn Edit để thiết lập ProjectID
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/3.png)
Điền đầy đủ thông tin và ấn Create
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/4.png)
Sau khi tạo project xong kích hoạt Google+ API bằng cách:
	Nhập Google+ API vào ô search
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/5.png)
    Enable Google+ API
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/6.png)
Sau khi enable dịch vụ thực hiện các bước sau để lấy thông tin:
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/7.png)
    CONFIGURE CONSENT SCREEN:
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/8.png)
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/9.png)
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/10.png)
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/11.png)
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/12.png)
	Tạo mới OAuth client ID
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/13.png)
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs//img/login/14.png)

	*ClientID và Client Secret sẽ dùng để cấu hình bên Java Application hoặc Java Web App.

## Tạo ứng dụng Java Web
Trước hết mình đang sử dụng server tomcat v8.5 và project cấu hình về Maven.
Trong file pom.xml them dependency sau:

        <!-- https://mvnrepository.com/artifact/com.google.api-client/google-api-client -->
		<dependency>
			<groupId>com.google.api-client</groupId>
			<artifactId>google-api-client</artifactId>
			<version>1.32.1</version>
		</dependency>
		<!-- https://mvnrepository.com/artifact/com.google.http-client/google-http-client -->
		<dependency>
			<groupId>com.google.http-client</groupId>
			<artifactId>google-http-client</artifactId>
			<version>1.39.2</version>
		</dependency>
		<!-- https://mvnrepository.com/artifact/com.google.http-client/google-http-client-gson -->
		<dependency>
			<groupId>com.google.http-client</groupId>
			<artifactId>google-http-client-gson</artifactId>
			<version>1.39.2</version>
		</dependency>
		<!-- https://mvnrepository.com/artifact/com.google.http-client/google-http-client-apache-v2 -->
		<dependency>
			<groupId>com.google.http-client</groupId>
			<artifactId>google-http-client-apache-v2</artifactId>
			<version>1.39.2</version>
		</dependency>
		<!-- https://mvnrepository.com/artifact/com.google.http-client/google-http-client -->
		<!-- https://mvnrepository.com/artifact/org.apache.httpcomponents/httpcore -->
		<dependency>
			<groupId>org.apache.httpcomponents</groupId>
			<artifactId>httpcore</artifactId>
			<version>4.4.14</version>
		</dependency>
		<!-- https://mvnrepository.com/artifact/org.apache.httpcomponents/httpclient -->
		<dependency>
			<groupId>org.apache.httpcomponents</groupId>
			<artifactId>httpclient</artifactId>
			<version>4.5.13</version>
		</dependency>
		<dependency>
			<groupId>jstl</groupId>
			<artifactId>jstl</artifactId>
			<version>1.2</version>
		</dependency>
		<!-- https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api -->
		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>javax.servlet-api</artifactId>
			<version>4.0.1</version>
			<scope>provided</scope>
		</dependency>
		<!-- https://mvnrepository.com/artifact/org.apache.httpcomponents/fluent-hc -->
		<dependency>
			<groupId>org.apache.httpcomponents</groupId>
			<artifactId>fluent-hc</artifactId>
			<version>4.5.13</version>
		</dependency>	

Tạo 1 file GoogleUtils.java

	import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
	import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
	import com.google.api.client.http.javanet.NetHttpTransport;
	import com.google.api.client.json.JsonFactory;

	import java.io.IOException;

	import org.apache.http.client.ClientProtocolException;
	import org.apache.http.client.fluent.Form;
	import org.apache.http.client.fluent.Request;
	import com.google.gson.Gson;
	import com.google.gson.JsonObject;

	import auth.GooglePoJo;

	public class GoogleUtils {
		private final static String GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";
		private final static String GOOGLE_CLIENT_SECRET = "YOUR_GOOGLE_CLIENT_SECRET"
		private final static String GOOGLE_REDIRECT_URI = "http://localhost:8080/<project-name>/login-google";
		private final static String GOOGLE_GRANT_TYPE = "authorization_code";
		private final static String GOOGLE_LINK_GET_TOKEN = "https://accounts.google.com/o/oauth2/token";
		private final static String GOOGLE_LINK_GET_USER_INFO = 		"https://www.googleapis.com/oauth2/v1/userinfo?access_token=";

		private GoogleUtils() {

		}

		public static String getToken(final String code) throws ClientProtocolException,IOException  {
			String response = Request.Post(GOOGLE_LINK_GET_TOKEN)
					.bodyForm(Form.form().add("client_id", GOOGLE_CLIENT_ID)
							.add("client_secret", GOOGLE_CLIENT_SECRET)
							.add("redirect_uri", GOOGLE_REDIRECT_URI)
							.add("code", code).add("grant_type", GOOGLE_GRANT_TYPE)
							.build())
					.execute().returnContent().asString();
			JsonObject jobj = new Gson().fromJson(response, JsonObject.class);
			String accessToken = jobj.get("access_token").toString().replaceAll("\"", "");
			return accessToken;
		}
		public static GooglePoJo getUserInfo(final String accessToken) throws ClientProtocolException, 
	IOException {
			String link = GOOGLE_LINK_GET_USER_INFO + accessToken;
			String response = Request.Get(link).execute().returnContent().asString();
			GooglePoJo googlePojo = new Gson().fromJson(response, GooglePoJo.class);
			System.out.println(googlePojo);
			return googlePojo;
		}
	}

Tạo 1 file GooglePoJo.java

	public class GooglePoJo {
	 	private String id;
	  	private String email;
	 	private boolean verified_email;
	  	private String name;
	  	private String given_name;
	  	private String family_name;
	  	private String link;
	  	private String picture;
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public boolean isVerified_email() {
			return verified_email;
		}
		public void setVerified_email(boolean verified_email) {
			this.verified_email = verified_email;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
		this.name = name;
		}
		public String getGiven_name() {
			return given_name;
		}
		public void setGiven_name(String given_name) {
			this.given_name = given_name;
		}
		public String getFamily_name() {
			return family_name;
		}
		public void setFamily_name(String family_name) {
			this.family_name = family_name;
		}
		public String getLink() {
			return link;
		}
		public void setLink(String link) {
			this.link = link;
		}
		public String getPicture() {
			return picture;
		}
		public void setPicture(String picture) {
			this.picture = picture;
		}
		public GooglePoJo() {
		// TODO Auto-generated constructor stub
		}
		public GooglePoJo(String id, String email, boolean verified_email, String name, String given_name,
			String family_name, String link, String picture) {
			super();
			this.id = id;
			this.email = email;
			this.verified_email = verified_email;
			this.name = name;
			this.given_name = given_name;
			this.family_name = family_name;
			this.link = link;
			this.picture = picture;
		}
}

Tạo 1 file Servlet

	package controller;
		
	import java.io.IOException;

	import javax.servlet.RequestDispatcher;
	import javax.servlet.ServletException;
	import javax.servlet.annotation.WebServlet;
	import javax.servlet.http.HttpServlet;
	import javax.servlet.http.HttpServletRequest;
	import javax.servlet.http.HttpServletResponse;

	import org.apache.http.client.fluent.Request;

	import auth.GooglePoJo;
	import utils.GoogleUtils;

	/**
	* Servlet implementation class LoginGoogleServlet
	*/
	@WebServlet("/login-google")
	public class LoginGoogleServlet extends HttpServlet {
		private static final long serialVersionUID = 1L;
		
		/**
		* @see HttpServlet#HttpServlet()
		*/
		public LoginGoogleServlet() {
			super();
			// TODO Auto-generated constructor stub
		}

		/**
		* @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
		*/
		protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, 
	IOException {
			// TODO Auto-generated method stub
			String code = request.getParameter("code");
			if (code == null || code.isEmpty()) {
				RequestDispatcher dis = request.getRequestDispatcher("/views/index.jsp");
				dis.forward(request, response);
				} else {
				String accessToken = GoogleUtils.getToken(code);
				GooglePoJo googlePojo = GoogleUtils.getUserInfo(accessToken);
				request.setAttribute("pojo", googlePojo);
				RequestDispatcher dis = request.getRequestDispatcher("/views/google.jsp");
				dis.forward(request, response);
				}
		}

		/**
		* @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
		*/
		protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, 
	IOException {
			// TODO Auto-generated method stub
			doGet(request, response);
		}

	}

Tạo file index.jsp và google.jsp như sau:
	-index.jsp

	<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	</head>
	<body>
		<a href="https://accounts.google.com/o/oauth2/auth?
		scope=email&redirect_uri=YOUR_REDIRECT_URI&
		response_type=code&client_id=YOUR_GOOGLE_CLIENT_ID
		&approval_prompt=force">Sign in with Google
	</a>
	</body>
	</html>
-google.jsp

	<%@ page language="java" contentType="text/html; charset=UTF-8"
		pageEncoding="UTF-8"%>
	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	</head>
	<body>
		<h1>${pojo.id }</h1>
		<h1>${pojo.email }</h1>

	</body>
	</html>

Link tham khảo: [Staring With API](https://oauth2api.blogspot.com/)

Chúc các bạn may mắn	
