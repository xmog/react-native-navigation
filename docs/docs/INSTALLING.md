# Installing

## Add npm dependency
* `npm install --save react-native-navigation@alpha`

## Setup iOS
1. drag-drop `node_modules/react-native-navigation/lib/ios/ReactNativeNavigation.xcodeproj` into Libraries folder in xcode (along with the rest of react)

2. Add ReactNativeNavigation into build-phases

3. in `AppDelegate.m` add:
  
	```objectivec
	#import <ReactNativeNavigation/ReactNativeNavigation.h>
	```

	remove everything in the method `didFinishLaunchingWithOptions` and add:

    ```objectivec
    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
    ```

## Setup Android

> Make sure your Android Studio installation is updated. We recommend editing `gradle` and `java` files in Android Studio as the ide will suggest fixes and point out errors, this way you avoid most common pitfalls.

1. Add the following in `android/settings.gradle`:

	```groovy
	include ':react-native-navigation'
	project(':react-native-navigation').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-navigation/lib/android/app/')
	```

2. Update `android/build.gradle`:

	```diff
	buildscript {
	    repositories {
	+        google()
	+        mavenLocal()
	+        mavenCentral()
	+        jcenter()
	    }
	    dependencies {
	+        classpath 'com.android.tools.build:gradle:3.0.1'
	-        classpath 'com.android.tools.build:gradle:2.2.3'
	    }
	}
	
	allprojects {
	    repositories {
	+		google()
	+		mavenCentral()
	+		mavenLocal()
			jcenter()
			maven {
	           // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
	           url "$rootDir/../../node_modules/react-native/android"
			}
		}
	}
	```

3. Update project dependencies in `android/app/build.gradle`.

	```groovy
	android {
	    compileSdkVersion 25
	    buildToolsVersion "27.0.3"
	    
	    defaultConfig {
	        minSdkVersion 19
	        targetSdkVersion 25
		...
	    }
	
	    compileOptions {
	        sourceCompatibility JavaVersion.VERSION_1_8
	        targetCompatibility JavaVersion.VERSION_1_8
	    }
	    ...
	}
	
	dependencies {
	    implementation fileTree(dir: "libs", include: ["*.jar"])
	    implementation "com.android.support:appcompat-v7:25.4.0"
	    implementation "com.facebook.react:react-native:+"
	    implementation project(':react-native-navigation')
	}
	```
	
4. Make sure you're using the new gradle plugin, edit `android/gradle/wrapper/gradle-wrapper.properties`

	```diff
	distributionBase=GRADLE_USER_HOME
	distributionPath=wrapper/dists
	zipStoreBase=GRADLE_USER_HOME
	zipStorePath=wrapper/dists
	+distributionUrl=https\://services.gradle.org/distributions/gradle-4.4-all.zip
	-distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip
	```

5. Update `gradle.properties` and disable incremental resource processing

	```diff
	+# Disable incremental resource processing as it broke relase build
	+android.enableAapt2=false
	```

6. In `MainActivity.java` it should extend `com.reactnativenavigation.NavigationActivity` instead of `ReactActivity`.

	This file can be located in `android/app/src/main/java/com/yourproject/`.

	```java
	import com.reactnativenavigation.NavigationActivity;

	public class MainActivity extends NavigationActivity {

	}
	```

	If you have any **react-native** related methods, you can safely delete them.

7. In `MainApplication.java`, add the following
	
	```java
	import com.reactnativenavigation.NavigationApplication;

	public class MainApplication extends NavigationApplication {
		@Override
		public boolean isDebug() {
			return BuildConfig.DEBUG;
		}

		@Override
		public List<ReactPackage> createAdditionalReactPackages() {
			return Arrays.<ReactPackage>asList(
				// eg. new VectorIconsPackage()
			);
		}
 	}
	```
    Make sure that `isDebug` methods is implemented.

8. Update `AndroidManifest.xml` and set `application` **android:name** value to `.MainApplication`
	
	```xml
	<application
		android:name=".MainApplication"
		...
	/>
	```
