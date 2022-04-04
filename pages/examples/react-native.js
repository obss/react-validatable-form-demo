import ExampleUsageWrapper from '../../components/ExampleUsageWrapper';

const ReactNative = () => {
    return (
        <ExampleUsageWrapper
            header={'Example Usage with React Native'}
            codeUrl={'pages/examples/react-native.js'}
        >
            <iframe
                src="https://snack.expo.io/embedded/@maliksenpai/reactnativevalidatableform"
                frameBorder="0"
                style={{
                    overflow: 'scroll',
                    background: '#212121',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    height: '700px',
                    width: '100%',
                }}
            />
        </ExampleUsageWrapper>
    );
};

export default ReactNative;
