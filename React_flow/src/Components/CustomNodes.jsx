import { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';
import { Position, Handle } from '@xyflow/react';

function CustomNodes(props) {
    const data = props.data;
    const id = props.id;

    const { setNodes } = useReactFlow();

    const onChange = useCallback((evt) => {
        const value = evt.target.value;

        setNodes((nds) =>
            nds.map((node) =>
                node.id === id
                    ? { ...node, data: { ...node.data, label: value } }
                    : node
            )
        );
    }, [id, setNodes]);

    return (
        <div style={{ padding: 10, border: '1px solid #ccc' }}>
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Right} id="a" />
            <Handle type="source" position={Position.Bottom} id="b" />
        </div>
    );
}

export default CustomNodes;