[react-native-navigation](../README.md) > ["adapters/Element"](../modules/_adapters_element_.md) > [Element](../classes/_adapters_element_.element.md)



# Class: Element

## Hierarchy


 `Component`.<`object`>,.<`any`>

**↳ Element**







## Index

### Constructors

* [constructor](_adapters_element_.element.md#constructor)


### Properties

* [context](_adapters_element_.element.md#context)
* [props](_adapters_element_.element.md#props)
* [refs](_adapters_element_.element.md#refs)
* [state](_adapters_element_.element.md#state)


### Methods

* [forceUpdate](_adapters_element_.element.md#forceupdate)
* [render](_adapters_element_.element.md#render)
* [setState](_adapters_element_.element.md#setstate)
* [componentDidCatch](_adapters_element_.element.md#componentdidcatch)
* [componentDidMount](_adapters_element_.element.md#componentdidmount)
* [componentDidUpdate](_adapters_element_.element.md#componentdidupdate)
* [componentWillMount](_adapters_element_.element.md#componentwillmount)
* [componentWillReceiveProps](_adapters_element_.element.md#componentwillreceiveprops)
* [componentWillUnmount](_adapters_element_.element.md#componentwillunmount)
* [componentWillUpdate](_adapters_element_.element.md#componentwillupdate)
* [shouldComponentUpdate](_adapters_element_.element.md#shouldcomponentupdate)


### Object literals

* [defaultProps](_adapters_element_.element.md#defaultprops)
* [propTypes](_adapters_element_.element.md#proptypes)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Element**(props: *`object`*, context?: *`any`*): [Element](_adapters_element_.element.md)


*Inherited from Component.__constructor*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:280*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| props | `object`   |  - |
| context | `any`   |  - |





**Returns:** [Element](_adapters_element_.element.md)

---


## Properties
<a id="context"></a>

###  context

**●  context**:  *`any`* 

*Inherited from Component.context*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:301*





___

<a id="props"></a>

###  props

**●  props**:  *`Readonly`.<`object`>`Readonly`.<`object`>* 

*Inherited from Component.props*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:299*





___

<a id="refs"></a>

###  refs

**●  refs**:  *`object`* 

*Inherited from Component.refs*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:302*


#### Type declaration


[key: `string`]: `ReactInstance`






___

<a id="state"></a>

###  state

**●  state**:  *`Readonly`.<`any`>* 

*Inherited from Component.state*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:300*





___


## Methods
<a id="forceupdate"></a>

###  forceUpdate

► **forceUpdate**(callBack?: *`undefined`⎮`function`*): `void`



*Inherited from Component.forceUpdate*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:291*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callBack | `undefined`⎮`function`   |  - |





**Returns:** `void`





___

<a id="render"></a>

###  render

► **render**(): `Element`



*Overrides Component.render*

*Defined in [adapters/Element.tsx:21](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/adapters/Element.tsx#L21)*





**Returns:** `Element`





___

<a id="setstate"></a>

###  setState

► **setState**K(state: *`function`⎮`S`⎮`object`*, callback?: *`undefined`⎮`function`*): `void`



*Inherited from Component.setState*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:286*



**Type parameters:**

#### K :  `keyof any`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| state | `function`⎮`S`⎮`object`   |  - |
| callback | `undefined`⎮`function`   |  - |





**Returns:** `void`





___

<a id="componentdidcatch"></a>

### «Static»«Optional» componentDidCatch

► **componentDidCatch**(error: *`Error`*, errorInfo: *`ErrorInfo`*): `void`



*Inherited from ComponentLifecycle.componentDidCatch*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:408*



Catches exceptions generated in descendant components. Unhandled exceptions will cause the entire component tree to unmount.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| error | `Error`   |  - |
| errorInfo | `ErrorInfo`   |  - |





**Returns:** `void`





___

<a id="componentdidmount"></a>

### «Static»«Optional» componentDidMount

► **componentDidMount**(): `void`



*Inherited from ComponentLifecycle.componentDidMount*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:369*



Called immediately after a compoment is mounted. Setting state here will trigger re-rendering.




**Returns:** `void`





___

<a id="componentdidupdate"></a>

### «Static»«Optional» componentDidUpdate

► **componentDidUpdate**(prevProps: *`Readonly`.<`object`>*, prevState: *`Readonly`.<`any`>*, prevContext: *`any`*): `void`



*Inherited from ComponentLifecycle.componentDidUpdate*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:398*



Called immediately after updating occurs. Not called for the initial render.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| prevProps | `Readonly`.<`object`>   |  - |
| prevState | `Readonly`.<`any`>   |  - |
| prevContext | `any`   |  - |





**Returns:** `void`





___

<a id="componentwillmount"></a>

### «Static»«Optional» componentWillMount

► **componentWillMount**(): `void`



*Inherited from ComponentLifecycle.componentWillMount*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:365*



Called immediately before mounting occurs, and before `Component#render`. Avoid introducing any side-effects or subscriptions in this method.




**Returns:** `void`





___

<a id="componentwillreceiveprops"></a>

### «Static»«Optional» componentWillReceiveProps

► **componentWillReceiveProps**(nextProps: *`Readonly`.<`object`>*, nextContext: *`any`*): `void`



*Inherited from ComponentLifecycle.componentWillReceiveProps*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:377*



Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nextProps | `Readonly`.<`object`>   |  - |
| nextContext | `any`   |  - |





**Returns:** `void`





___

<a id="componentwillunmount"></a>

### «Static»«Optional» componentWillUnmount

► **componentWillUnmount**(): `void`



*Inherited from ComponentLifecycle.componentWillUnmount*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:403*



Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.




**Returns:** `void`





___

<a id="componentwillupdate"></a>

### «Static»«Optional» componentWillUpdate

► **componentWillUpdate**(nextProps: *`Readonly`.<`object`>*, nextState: *`Readonly`.<`any`>*, nextContext: *`any`*): `void`



*Inherited from ComponentLifecycle.componentWillUpdate*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:394*



Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nextProps | `Readonly`.<`object`>   |  - |
| nextState | `Readonly`.<`any`>   |  - |
| nextContext | `any`   |  - |





**Returns:** `void`





___

<a id="shouldcomponentupdate"></a>

### «Static»«Optional» shouldComponentUpdate

► **shouldComponentUpdate**(nextProps: *`Readonly`.<`object`>*, nextState: *`Readonly`.<`any`>*, nextContext: *`any`*): `boolean`



*Inherited from ComponentLifecycle.shouldComponentUpdate*

*Defined in /Users/danielzlotin/dev/react-native-navigation/node_modules/@types/react/index.d.ts:388*



Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true. `PureComponent` implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate` and `componentDidUpdate` will not be called.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nextProps | `Readonly`.<`object`>   |  - |
| nextState | `Readonly`.<`any`>   |  - |
| nextContext | `any`   |  - |





**Returns:** `boolean`





___


<a id="defaultprops"></a>

## Object literal: defaultProps


<a id="defaultprops.resizemode"></a>

###  resizeMode

**●  resizeMode**:  *`string`*  = ""

*Defined in [adapters/Element.tsx:18](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/adapters/Element.tsx#L18)*





___

<a id="proptypes"></a>

## Object literal: propTypes


<a id="proptypes.elementid"></a>

###  elementId

**●  elementId**:  *`function`*  =  PropTypes.string.isRequired

*Defined in [adapters/Element.tsx:13](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/adapters/Element.tsx#L13)*


#### Type declaration
►(object: *`T`*, key: *`string`*, componentName: *`string`*, ...rest: *`any`[]*): `Error`⎮`null`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| object | `T`   |  - |
| key | `string`   |  - |
| componentName | `string`   |  - |
| rest | `any`[]   |  - |





**Returns:** `Error`⎮`null`






___
<a id="proptypes.resizemode-1"></a>

###  resizeMode

**●  resizeMode**:  *`Requireable`.<`any`>*  =  PropTypes.string

*Defined in [adapters/Element.tsx:14](https://github.com/wix/react-native-navigation/blob/5cba4e85/lib/src/adapters/Element.tsx#L14)*





___


