1. jsx slot 패턴의 종류

여러 종류의 컴포넌트는 함께 사용해야 할때는, props 로 기능들 또는 state 를 내려주면 그 컴포넌트는

특정상황에서만 사용하는 컴포넌트로 되기때문에 props 로 jsx 코드 자체를 내려보내 주는 패턴을 자주 사용함.

2. 컴포넌트의 타입을 동적으로 설정 가능

html 의 태그들을 props 로 내려 주며 자식컴포넌트이 태그를 설정해서 동적으로 변형이 가능하다.

-> 좀더 유연하게 컴포넌트를 활용할수 있으며, 더 다양한 상황에서 활용이 가능하다.

```
//부모
  <ul>
<CoreConcept key={conceptItem.title}
<!-- DynamicTag ="div" -->
DynamicTag ={Componet}
 {...conceptItem} />
</ul>

//자식
export default function CoreConcept({ image, title, DynamicTag }) {
  return (
    <>
      <DynamicTag>{title}</DynamicTag>
      <p>{description}</p>
    </>
  );
}
```

위의 코드와 같이 대문자로 props 로 전달하거나 소문자로 하였을때에는 파일 안에서 대문자 변수로 설정해서 써야한다.
{} 로 전달시, 커스텀 컴포넌트도 가능함
