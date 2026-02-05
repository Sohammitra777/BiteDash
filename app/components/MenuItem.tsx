import { MenuItem as MenuItemType } from '../lib/types';

export default function MenuItem({ item, onAdd }: { item: MenuItemType; onAdd: () => void }) {
    return (
        <div className="border rounded p-4">
            <img src={item.image} alt={item.name} className="h-40 w-full object-cover rounded" />
            <h3 className="mt-2 font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="font-bold">${item.price}</span>
                <button onClick={onAdd} className="bg-black text-white px-3 py-1 rounded">
                    Add
                </button>
            </div>
        </div>
    );
}
