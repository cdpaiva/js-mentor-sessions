export const initialRooms = [
    {
        unit_id: 101,
        smoking_policy: "NONSMOKING",
        size: {
            value: 25.5,
            unit: "SQM",
        },
        partner_reference_name: "Room A",
        occupancy: {
            max_guests: 0,
            max_adults: 0,
            max_children: 0,
        },
    },
    {
        unit_id: 102,
        smoking_policy: "SMOKING",
        size: {
            value: 45,
            unit: "SQM",
        },
        partner_reference_name: "Suite B",
        floor_numbers_located_on: [2, 3],
        occupancy: {
            max_guests: 4,
            max_adults: 3,
            max_children: 1,
        },
    },
    {
        unit_id: 103,
        smoking_policy: "SMOKING_AND_NONSMOKING",
        size: {
            value: 30,
            unit: "SQFT",
        },
        partner_reference_name: "Room C",
        occupancy: {
            max_guests: 2,
            max_adults: 2,
            max_children: 0,
        },
    },
];
